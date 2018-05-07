exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    isBase64Encoded: true,
    body: new Buffer("asdf").toString("base64")
  });
};
