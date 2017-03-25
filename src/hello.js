var __ = require('lodash');

function sayHello(to) {
  return __.template("Hello, <%= name %>!")({name: to});
}
