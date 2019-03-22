module.exports = {
    addProduct: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user
        const {productName, price, productImage, type, make, description} = req.body
        let item = db.add_Product({productName, price, productImage, type, make, description, user_id})
        db.getMyStore({user_id}).then(resp => {
            res.status(200).send(resp)
        })
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
        const {id} = req.params;
        const {user_id} = req.session.user;
        req.params.id = parseInt(req.params.id);

        db.deleteProduct({product_id:id, user_id}).then(resp => {
            res.status(200).send(resp)
        })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {product_id} = req.params;
        const {product_name, product_img, price, product_description} = req.body;

        db.updateProduct([ product_id], product_name, product_img, price, product_description)
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
}