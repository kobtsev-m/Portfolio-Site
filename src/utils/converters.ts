export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = result?.reduce((acc, el, i) => {
    if (i > 0) {
      return acc + `${parseInt(el, 16) / 2.55}%` + (i < 3 ? ',' : '');
    }
    return acc;
  }, 'rgb(');
  return rgb + ')';
}
