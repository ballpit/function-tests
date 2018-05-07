exports.handler = function(event, context, callback) {
  callback(new Error("function error"));
};
