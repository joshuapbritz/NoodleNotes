const icons = ['🤯', '🥳', '🦄', '⚡', '🤩', '😍', '🦊'];

export const RandomEmojii = () => {
  const location = Math.floor(Math.random() * icons.length);
  const icon = icons[location];
  icons.splice(location, 1);
  return icon;
};
