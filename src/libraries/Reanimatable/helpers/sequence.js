/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
async function sequence(refs, callback) {
  const results = [];
  const countRefs = refs.length;
  for (let i = 0; i < countRefs; i++) {
    results.push(
      refs[i].current
        ? await callback(refs[i].current, i)
        : { isInitialized: false }
    );
  }
  return results;
}

export default sequence;
