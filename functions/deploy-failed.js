exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("deploy failed", body.payload);
  callback(null, {
    statusCode: 200
  });
};
