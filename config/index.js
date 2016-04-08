var configValues = require('./config');

module.exports = {

  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds019980.mlab.com:19980/nodegeterrdone';
  }

}
