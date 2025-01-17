const base = {
  color: {
    //lightBlue: '#B3E5FC',
    lightBlue: '#525252',
    // blue: '#03A9F4',
    blue: '#D3D3D3',
  },
  //font: { mono: `'Roboto Mono', monospace` },
    font: { mono: `'Times New Roman', 'Times New Roman'` },
  //font: {mono:  `'Roboto', sans-serif` },
  breakpoint: '640px',
};

const darkColors = {
  background: '#6667AB',
  text: '#f1f1f1',
};

const lightColors = {
  background: '#6667AB',
  text: '#212121',
};

export default function theme(isDark) {
  return {
    modeColors: isDark ? darkColors : lightColors,
    ...base,
  };
}
