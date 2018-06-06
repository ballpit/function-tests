exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("identity validate");
  callback(null, {
    statusCode: 200
  });
};
