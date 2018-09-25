/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
export type Options = Object;
export type ComponentName = string;
export type Component = ReactComponent;
export type Listener = Function;
export type Routes = Array<{
  routeName: ComponentName,
  routeComponent: Component
}>;
