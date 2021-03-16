const express = require('express');
const cors = require('cors');
const Router = express.Router();
const stripe = require('stripe')('sk_test_51IVR5nKLKoqlqVwNt2rY0KRbEA1ow3HYJhAn50jEpBT2dZfvGocbzZNTXmk38botMfo17nIObPuUPDQ0ztJEHbIZ00cODqwch4');
const uuid = require("uuid/v4");

Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `http://localhost:8080`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE');
    next();
});

Router.use(express.json());
Router.use(cors());

Router.post("/", async (req, res) => {
    const { priceId } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            subscription_data: {
            trial_period_days: 14,
            },
            line_items: [
            {
                price: priceId,
                quantity: 1,
            },
            ],
            success_url: 'http://localhost:8080/pricing',
            cancel_url: 'http://localhost:8080/',
    });

        res.send({
            sessionId: session.id,
        });
    } catch (e) {
        res.status(400);
        return res.send({
            error: {
            message: e.message,
            }
        });
    }
});

module.exports = Router;