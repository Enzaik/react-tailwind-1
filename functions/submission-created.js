exports.handler = (event, context, callback) => {
  const response = JSON.parse(event.body).payload;

  // Do something with the email address and then
  // invoke the callback.
  console.log(response);
  console.log(process.env);

  callback(null, {
    statusCode: 200,
    body: response,
  });
};
