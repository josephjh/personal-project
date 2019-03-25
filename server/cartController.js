module.exports = {
    getCart: async (req, res)  => {
        const {user_id} = req.session.user;
        const db = req.app.get('db');

        const resp = await db.getCart({user_id});
        res.status(200).send(resp)
    },
    addToCart: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user;
        const {product_id} = req.body;
        let cart = {product_id, user_id}

        await db.addToCart(cart);
        const resp = await db.getCart({user_id});
        res.status(200).send(resp)
    },
    removeFromCart: async (req, res) => {
        const db = req.app.get('db');
        let {cart_id} = req.params;
        const {user_id} = req.session.user
        
        await db.removeFromCart({cart_id})
        const resp = await db.getCart({user_id})
        res.status(200).send(resp)
    }
}