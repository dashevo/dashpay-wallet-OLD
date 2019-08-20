/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import Animated from 'react-native-reanimated';
import { State } from 'react-native-gesture-handler';

// Internal dependencies
import {
  anchorBehavior,
  bounceBehavior,
  frictionBehavior,
  gravityBehavior,
  influenceAreaWithRadius,
  snapTo,
  springBehavior,
  withInfluence,
  withLimits,
} from './helpers';

import {
  ANIMATOR_PAUSE_CONSECUTIVE_FRAMES,
  ANIMATOR_PAUSE_ZERO_VELOCITY,
  DEFAULT_GRAVITY_FALLOF,
  DEFAULT_SNAP_DAMPING,
  DEFAULT_SNAP_TENSION,
} from './constants';

const {
  add,
  cond,
  diff,
  divide,
  eq,
  event,
  lessThan,
  and,
  call,
  block,
  multiply,
  set,
  abs,
  clockRunning,
  greaterOrEq,
  startClock,
  stopClock,
  Clock,
  Value,
  onChange,
} = Animated;

class Interactable {
  constructor(options) {
    this.options = {
      dragEnabled: true,
      dragToss: 0.1,
      maxPointers: 1,
      initialPosition: {
        x: 0,
        y: 0,
      },
      ...options,
    };

    const gesture = { x: new Value(0), y: new Value(0) };
    const state = new Value(-1);

    this.onGestureEvent = event([
      {
        nativeEvent: {
          translationX: gesture.x,
          translationY: gesture.y,
          state,
        },
      },
    ]);

    const target = {
      x: new Value(this.options.initialPosition.x || 0),
      y: new Value(this.options.initialPosition.y || 0),
    };

    const update = {
      x: this.options.animatedValueX,
      y: this.options.animatedValueY,
    };

    const clock = new Clock();
    const dt = divide(diff(clock), 1000);

    const obj = {
      vx: new Value(0),
      vy: new Value(0),
      mass: 1,
    };

    const tossedTarget = {
      x: add(target.x, multiply(this.options.dragToss, obj.vx)),
      y: add(target.y, multiply(this.options.dragToss, obj.vy)),
    };

    const permBuckets = [[], [], []];

    const addSpring = (anchor, tension, influence, buckets = permBuckets) => {
      buckets[0].push(
        withInfluence(influence, target, springBehavior(dt, target, obj, anchor, tension)),
      );
    };

    const addFriction = (damping, influence, buckets = permBuckets) => {
      buckets[1].push(withInfluence(influence, target, frictionBehavior(dt, target, obj, damping)));
    };

    const addGravity = (anchor, strength, falloff, influence, buckets = permBuckets) => {
      buckets[0].push(
        withInfluence(
          influence,
          target,
          gravityBehavior(dt, target, obj, anchor, strength, falloff),
        ),
      );
    };

    const dragAnchor = { x: new Value(0), y: new Value(0) };
    const dragBuckets = [[], [], []];
    if (this.options.dragWithSpring) {
      const { tension, damping } = this.options.dragWithSpring;
      addSpring(dragAnchor, tension, null, dragBuckets);
      addFriction(damping, null, dragBuckets);
    } else {
      dragBuckets[0].push(anchorBehavior(dt, target, obj, dragAnchor));
    }

    const handleStartDrag = this.options.onDrag
      && call([target.x, target.y], ([x, y]) => this.options.onDrag({ nativeEvent: { x, y, state: 'start' } }));

    const snapBuckets = [[], [], []];
    const snapAnchor = {
      x: new Value(this.options.initialPosition.x || 0),
      y: new Value(this.options.initialPosition.y || 0),
      tension: new Value(DEFAULT_SNAP_TENSION),
      damping: new Value(DEFAULT_SNAP_DAMPING),
    };
    const updateSnapTo = snapTo(
      tossedTarget,
      this.options.snapPoints,
      snapAnchor,
      this.options.onSnap,
      this.options.onDrag,
    );

    addSpring(snapAnchor, snapAnchor.tension, null, snapBuckets);
    addFriction(snapAnchor.damping, null, snapBuckets);

    if (this.options.springPoints) {
      this.options.springPoints.forEach((pt) => {
        addSpring(pt, pt.tension, pt.influenceArea);
        if (pt.damping) {
          addFriction(pt.damping, pt.influenceArea);
        }
      });
    }
    if (this.options.gravityPoints) {
      this.options.gravityPoints.forEach((pt) => {
        const falloff = pt.falloff || DEFAULT_GRAVITY_FALLOF;
        addGravity(pt, pt.strength, falloff, pt.influenceArea);
        if (pt.damping) {
          const influenceArea = pt.influenceArea || influenceAreaWithRadius(1.4 * falloff, pt);
          addFriction(pt.damping, influenceArea);
        }
      });
    }
    if (this.options.frictionAreas) {
      this.options.frictionAreas.forEach((pt) => {
        addFriction(pt.damping, pt.influenceArea);
      });
    }
    if (this.options.boundaries) {
      snapBuckets[0].push(
        bounceBehavior(dt, target, obj, this.options.boundaries, this.options.boundaries.bounce),
      );
    }

    const sortBuckets = specialBuckets => ({
      x: specialBuckets
        .map((a, idx) => [...permBuckets[idx], ...a].reverse().map(b => b.x))
        .reduce((acc, c) => acc.concat(c), []),
      y: specialBuckets
        .map((a, idx) => [...permBuckets[idx], ...a].reverse().map(b => b.y))
        .reduce((acc, c) => acc.concat(c), []),
    });

    const dragBehaviors = sortBuckets(dragBuckets);
    const snapBehaviors = sortBuckets(snapBuckets);

    const noMovementFrames = {
      x: new Value(this.options.verticalOnly ? ANIMATOR_PAUSE_CONSECUTIVE_FRAMES + 1 : 0),
      y: new Value(this.options.horizontalOnly ? ANIMATOR_PAUSE_CONSECUTIVE_FRAMES + 1 : 0),
    };

    const stopWhenNeeded = cond(
      and(
        greaterOrEq(noMovementFrames.x, ANIMATOR_PAUSE_CONSECUTIVE_FRAMES),
        greaterOrEq(noMovementFrames.y, ANIMATOR_PAUSE_CONSECUTIVE_FRAMES),
      ),
      [
        this.options.onStop
          ? cond(
            clockRunning(clock),
            call([target.x, target.y], ([x, y]) => this.options.onStop({ nativeEvent: { x, y } })),
          )
          : undefined,
        stopClock(clock),
      ],
      startClock(clock),
    );

    const trans = (axis, vaxis, lowerBound, upperBound) => {
      const dragging = new Value(0);
      const start = new Value(0);
      const x = target[axis];
      const vx = obj[vaxis];
      const anchor = dragAnchor[axis];
      const drag = gesture[axis];
      let advance = cond(
        lessThan(abs(vx), ANIMATOR_PAUSE_ZERO_VELOCITY),
        x,
        add(x, multiply(vx, dt)),
      );
      if (this.options.boundaries) {
        advance = withLimits(
          advance,
          this.options.boundaries[lowerBound],
          this.options.boundaries[upperBound],
        );
      }
      const last = new Value(Number.MAX_SAFE_INTEGER);
      const noMoveFrameCount = noMovementFrames[axis];
      const testMovementFrames = block([
        onChange(snapAnchor.x, set(last, Number.MAX_SAFE_INTEGER)),
        onChange(snapAnchor.y, set(last, Number.MAX_SAFE_INTEGER)),
        cond(eq(advance, last), set(noMoveFrameCount, add(noMoveFrameCount, 1)), [
          set(last, advance),
          set(noMoveFrameCount, 0),
        ]),
      ]);
      const step = cond(
        eq(state, State.ACTIVE),
        [
          cond(dragging, 0, [handleStartDrag, startClock(clock), set(dragging, 1), set(start, x)]),
          set(anchor, add(start, drag)),
          cond(dt, dragBehaviors[axis]),
        ],
        [
          cond(dragging, [updateSnapTo, set(dragging, 0)]),
          cond(dt, snapBehaviors[axis]),
          testMovementFrames,
          stopWhenNeeded,
        ],
      );
      const wrapStep = this.options.dragEnabled
        ? cond(this.options.dragEnabled, step, [set(dragging, 1), stopClock(clock)])
        : step;

      this.dragging[axis] = dragging;
      this.velocity[axis] = vx;

      const doUpdateAnReturn = update[axis] ? set(update[axis], x) : x;
      return block([wrapStep, set(x, advance), doUpdateAnReturn]);
    };

    this.dragging = {};
    this.velocity = {};
    this.position = target;
    this.snapAnchor = snapAnchor;

    this.bind = {
      enabled: this.options.dragEnabled,
      maxPointers: this.options.maxPointers,
      onGestureEvent: this.onGestureEvent,
      onHandlerStateChange: this.onGestureEvent,
    };

    this.translateX = trans('x', 'vx', 'left', 'right');
    this.translateY = trans('y', 'vy', 'top', 'bottom');
  }

  setVelocity({ x, y }) {
    if (x !== undefined) {
      this.dragging.x.setValue(1);
      this.velocity.x.setValue(x);
    }
    if (y !== undefined) {
      this.dragging.y.setValue(1);
      this.velocity.y.setValue(y);
    }
  }

  snapTo({ index }) {
    const snapPoint = this.options.snapPoints[index];
    this.snapAnchor.tension.setValue(snapPoint.tension || DEFAULT_SNAP_TENSION);
    this.snapAnchor.damping.setValue(snapPoint.damping || DEFAULT_SNAP_DAMPING);
    this.snapAnchor.x.setValue(snapPoint.x || 0);
    this.snapAnchor.y.setValue(snapPoint.y || 0);
    if (this.options.onSnap) {
      this.options.onSnap({ nativeEvent: { ...snapPoint, index } });
    }
  }

  changePosition({ x, y }) {
    if (x !== undefined) {
      this.dragging.x.setValue(1);
      this.position.x.setValue(x);
    }
    if (y !== undefined) {
      this.dragging.x.setValue(1);
      this.position.y.setValue(y);
    }
  }
}

export default Interactable;
