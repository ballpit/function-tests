exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("identity signup");
  callback(null, {
    statusCode: 200
  });
};
