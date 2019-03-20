module.exports = {
    addProduct: async (req, res) => {
        const {user_id} = req.session.user
        const {productName, price, productImage, type, make, description} = req.body
        const db = req.app.get('db');
        let item = db.add_Product({productName, price, productImage, type, make, description, user_id})
        res.status(200).send(item)
    },
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.getAllProducts().then(resp => {
            res.status(200).send(resp)
        })
    },
    getMyStore: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user
        console.log(req.session.user)

        db.getMyStore({user_id}).then(resp => {
            res.status(200).send(resp)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        req.params.id = parseInt(req.params.id)
        const {id} = req.params;
        const {user_id} = req.session.user

        db.deleteProduct({product_id:id, user_id}).then(resp => {
            res.status(200).send(resp)
        })
    }
}