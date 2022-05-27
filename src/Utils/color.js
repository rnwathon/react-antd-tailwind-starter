export function rgb2hex(rgb) {
  const rgbArr = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return `0${parseInt(x, 10).toString(16)}`.slice(-2);
  }
  return `#${hex(rgbArr[1])}${hex(rgbArr[2])}${hex(rgbArr[3])}`;
}

export function getBgColorRgb(id) {
  const el = window.document.getElementById(id);
  return window.getComputedStyle(el, null).getPropertyValue('background-color');
}

export function getBgColorHex(id) {
  return rgb2hex(getBgColorRgb(id));
}
