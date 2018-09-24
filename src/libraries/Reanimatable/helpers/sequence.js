/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
// Tmp: Asynchronous iteration
async function sequence(refs, callback) {
  const results = [];
  for (let i = 0; i < refs.length; i++) {
    let response;
    if (refs[i].current) {
      response = await callback(refs[i].current, i);
    }
    results.push(response);
  }
  return results;
}

export default sequence;
