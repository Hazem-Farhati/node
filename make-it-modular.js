var module = require('./module');

var directory = process.argv[2];
var filter = process.argv[3];

var callback = function(error, filtered) {
  if (error) {
    console.log('error');
    console.log(error);
  }
  for (var index in filtered) {
    console.log(filtered[index]);
  }
};

module(directory, filter, callback);

/* my-module.js */
