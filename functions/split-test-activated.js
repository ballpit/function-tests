exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("split test activated");
  callback(null, {
    statusCode: 200
  });
};
