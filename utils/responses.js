const errorResponse = (err, res) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Something went wrong';
  const response = res.status(statusCode).json({ status: 'Failed', message });

  return response;
};

module.exports = {
  errorResponse
};
