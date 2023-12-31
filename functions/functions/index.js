const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
// const {Payment} = require("@mui/icons-material");
const stripe = require("stripe")(
    "sk_test_51O0gq3F71lqZQv1B3YDME4ca1PySIHrhNjS543uQ" +
    "kSSiwoooNABloPUJxltYNrJpJ010CpFfxNaflrWfXkUl1Qpe001KVtRMLB",
)

// api

// api config
const app = express()

// middleware
app.use(cors({ origin: true }))
app.use(express.json())

// route
app.get("/", (req, res) => res.status(200).send("hello world"))
app.post("/payments/create", async (req, res) => {
  const { total } = req.query
  console.log("payment request received", total)

  const PaymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })
  res.status(201).send({ clientSecret: PaymentIntent.client_secret })
})

// if okay creatw"

// listen command
exports.api = functions.https.onRequest(app)
