//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://cenassign:boop@ds127044.mlab.com:27044/assign3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyDnnqAkdEYNrAAAxJM3FmacQUkeU0K3CcA'
  },
  port: 8080
};