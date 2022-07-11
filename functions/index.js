const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51LIhTyHuvekNpR8ZzVJEhKHEo1dUwvUchbac3qkwnmYSTRmXqE4rvV5hTYWsTeI7IW58m28coGvlkRLVtJ1YLWnV00rDYLaW0V');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin : true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world!'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved for this amount >> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits of currency
        currency: "usd",
    });

    // OK ~ created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command
exports.api = functions.https.onRequest(app)