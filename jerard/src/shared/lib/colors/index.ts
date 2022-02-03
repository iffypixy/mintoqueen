const rgbToHex = (hex: string) => {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const updated = hex.replace(shorthand, (r, g, b) => r + r + g + g + b + b);

  const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  const result = regex.exec(updated);

  return (
    result && [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16),
    ]
  );
};

export const opacify = (hex: string, amount: number) => {
  const rgb = rgbToHex(hex)!;

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${amount})`;
};
