var algoliasearch = require('algoliasearch');

exports.handler = (event, context, callback) => {
  const response = JSON.parse(event.body).payload;
  const searchClient = algoliasearch(process.env.ALGOLIA_CLIENT, process.env.ALGOLIA_KEY);
  const housesIndex = searchClient.initIndex('houses');
  // Do something with the email address and then
  // invoke the callback.

  console.log('response', response);
  const { data } = response;

  housesIndex
    .saveObject(
      {
        name: data.category,
        price: data.price,
        beds: data.beds,
        baths: data.baths,
        description: data.description,
        stars: 5,
        url: data.photo,
        province: data.province,
      },
      { autoGenerateObjectIDIfNotExist: true }
    )
    .then(({ objectID }) => {
      console.log('objectID', objectID);
    });

  callback(null, {
    statusCode: 200,
    body: response,
  });
};
