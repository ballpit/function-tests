exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "my-header": "my-value"
    }
  });
};
