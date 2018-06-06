exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("deploy building", body.payload);
  callback(null, {
    statusCode: 200
  });
};
