const customError = (msg, statusCode, status) => {
  let error = new Error(msg);
  error.statusCode = statusCode;
  error.status = status;
  return error;
};

module.exports = customError;
