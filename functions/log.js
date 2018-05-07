exports.handler = function(event, context, callback) {
  console.log("log function called at", Date.now());
  console.log("event", event);
  console.log("context", context);
};
