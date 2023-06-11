var jwt = require('jsonwebtoken');

module.exports = function (config) {
  var currentTime = Math.floor(new Date() / 1000);
  var token = jwt.sign(
    {
      iss: '47726291',
      ist: 'project',
      iat: currentTime,
      exp: currentTime + config.auth.expire,
    },
    '280ca507595a56c05fd9414809081fcbf9de44fd'
  );

  return token;
};
