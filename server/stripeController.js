require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    handlePayment: async (req, res) => {
        const db = req.app.get('db');
        const { amount, token:{id} } = req.body;
        const {user_id} = req.session.user;

        const order = await db.orderNumber()

        const order_id = order[0].order_id

        db.updateCart({user_id, order_id})

        console.log(111111, order_id)

        stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: id,
                description: 'UTOR Test Site',
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            }
        )
    }
}