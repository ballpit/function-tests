exports.handler = function(event, context, callback) {
  console.log("deploy locked", event);
  callback(null, {
    statusCode: 200
  });
};
