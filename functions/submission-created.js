var algoliasearch = require('algoliasearch');

exports.handler = (event, context, callback) => {
  const response = JSON.parse(event.body).payload;
  const searchClient = algoliasearch(process.env.ALGOLIA_CLIENT, process.env.ALGOLIA_KEY);
  const housesIndex = searchClient.initIndex('houses');
  // Do something with the email address and then
  // invoke the callback.

  console.log('response', response);

  housesIndex
    .saveObject(
      {
        name: 'from this shit',
        description: 'from this shit',
        price: 5663,
        beds: 3,
        baths: 1,
        stars: 1,
        url:
          'https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        province: 'La Habana',
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
