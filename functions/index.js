const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe");

const STRIPE_KEY = process.env.STRIPE_KEY;
//(http://localhost:5001/my-project-3d62b/us-central1/api).


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

 app.get('/', (request, response) => response.status(200).send('hello world'));
//An HTTP status code 200 means success. The client has requested documents from the server. The server has replied to the client and given the client the documents. OK


app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http function initialized (http://localhost:5001/my-project-3d62b/us-central1/api). 








// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
