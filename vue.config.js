module.exports = {
    devServer: {
      host: 'team3.eaglesoftwareteam.com',
    },
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/todoapp-vue/',
  };

