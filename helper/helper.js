const getDomainName = (req) => {
  var result = "";

  // local
  result = req.protocol + "://" + req.headers.host;

  return result;
};

const createResponse = (code, status, errors, data) => {
  let error;

  error = [{ msg: errors }];

  return {
    code: parseInt(code),
    status: status,
    errors: error,
    data: data,
  };
};

module.exports = {
  getDomainName,
  createResponse,
};
