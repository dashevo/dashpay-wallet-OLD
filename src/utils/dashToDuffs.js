// @flow
const DUFFS_PER_DASH = 100000000;

const dashToDuffs = (dash: number) => parseInt((dash * DUFFS_PER_DASH).toFixed(0), 10);

export default dashToDuffs;
