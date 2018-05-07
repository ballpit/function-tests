exports.handler = function(event, context, callback) {
  setTimeout(function() {
    callback();
  }, 15 * 1000);
};
