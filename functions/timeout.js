exports.handler = function(event, context, callback) {
  setTimeout(15 * 1000, function() {
    callback();
  });
};
