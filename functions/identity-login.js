exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("identity login");
  callback(null, {
    statusCode: 200
  });
};
