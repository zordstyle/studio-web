const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const color = {
  black: "#000000",
  grey: "#999999",
};

const theme = {
  device,
  deviceSizes,
  color
};

export default theme;