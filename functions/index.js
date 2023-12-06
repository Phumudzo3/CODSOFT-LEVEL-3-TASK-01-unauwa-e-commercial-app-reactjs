const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// const {Payment} = require("@mui/icons-material");
const stripe = require("stripe")(
    "sk_test_51O0gq3F71lqZQv1BzOOCBNlLSSCCMjgpebq3fksGvINq"+
    "gnnKt1Mbolv8hgeTe9xReShR3jCbl3Exysz7jb4QdBmE00W6ROEpu1",
);

// api

// api config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// route
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received", total);

  const PaymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(200).send({clientSecret: PaymentIntent.client_secret});
});

// if okay creatw"

// listen command
exports.api = functions.https.onRequest(app);
