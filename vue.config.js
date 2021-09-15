module.exports = {
    devServer: {
      host: 'localhost',
    },
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/todoapp-vue/',
    transpileDependencies: ['vuetify'],
  };
