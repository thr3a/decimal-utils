// src/index.ts
var floorDecimal = (value, n) => {
  return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n);
};
var ceilDecimal = (value, n) => {
  return Math.ceil(value * Math.pow(10, n)) / Math.pow(10, n);
};
var roundDecimal = (value, n) => {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
};
export {
  ceilDecimal,
  floorDecimal,
  roundDecimal
};
