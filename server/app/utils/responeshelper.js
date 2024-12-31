const successResponse = (res, message, data = null) => {
  const response = { message };
  response.status = 200;
  if (data) {
    response.payload = data;
  }
  return res.status(res.statusCode).send(response);
};

const errorResponse = (res, error, statusCode = null) => {
  console.log("error --==-- ", error);
  const status = statusCode || 400;
  return res.status(status).send({
    status,
    message: error.message || "Something went wrong",
  });
};

export { successResponse, errorResponse };
