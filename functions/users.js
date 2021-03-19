exports.handler = function(event, context, callback) {

  const validateUser = email => {
    if (email.split("@")[1] === "silvanomedia.co.uk") {
      return ["editor"];
    } else {
      return ["visitor"];
    }
  };

  const roles = validateUser(user.email)

  const responseBody = {
    app_metadata: {
      roles
    },
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};