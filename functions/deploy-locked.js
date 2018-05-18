exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  console.log("deploy locked to", body.payload.commit_ref);
  callback(null, {
    statusCode: 200
  });
};
