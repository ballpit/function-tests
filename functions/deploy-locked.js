exports.handler = function(event, context, callback) {
  var body = JSON.parse(event.body);
  if (body.payload.locked) {
    console.log("deploy locked to", body.payload.commit_ref);
  } else {
    console.log("deploy unlocked");
  }
  callback(null, {
    statusCode: 200
  });
};
