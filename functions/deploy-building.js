exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("deploy building");
  callback(null, {
    statusCode: 200
  });
};
