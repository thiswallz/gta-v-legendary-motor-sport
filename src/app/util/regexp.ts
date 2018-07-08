export function carDetailsMatch(param) {
  const reg = /^(car-details)(.*)/;
  return param.match(reg);
}
