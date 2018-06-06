exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("form submission created");
  callback(null, {
    statusCode: 200
  });
};
