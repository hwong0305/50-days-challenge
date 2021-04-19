module.exports = {
  plugins: ['@snowpack/plugin-sass'],
  mount: {
    src: '/',
    public: '/',
  },
  devOptions: {
    open: 'none',
  },
};
