export function hexToRgbA(hex: string, opacity: number) {
  const hexColor = `#${hex}`;
  const [r, g, b] = hexColor.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${opacity || 0.6})`;
}