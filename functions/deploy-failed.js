exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("deploy failed");
  callback(null, {
    statusCode: 200
  });
};
