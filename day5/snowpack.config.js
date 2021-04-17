module.exports = {
  plugins: ['@snowpack/plugin-sass'],
  mount: {
    public: '/',
    src: '/',
  },
  devOptions: {
    open: 'none',
    port: 5437,
  },
};
