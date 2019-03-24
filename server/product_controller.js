module.exports = {
    addProduct: async (req, res) => {
        console.log(555555, req.body)
        const db = req.app.get('db');
        const {user_id} = req.session.user
        const {product_name, price, product_img, type, make, product_description} = req.body
        let item = {product_name, price, product_img, type, make, product_description, user_id}
        db.add_Product(item).then(resp => {
            console.log(3333333333, resp)
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
        console.log(555555, req)
        const db = req.app.get('db');
        const {id} = req.params;

        db.deleteProduct({product_id:id, user_id: req.session.user.user_id}).then(resp => {
            res.status(200).send(resp)
        })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        console.log(req.body)
        const {product_name, product_img, price, product_description} = req.body;
        const {user_id} = req.session.user;
        console.log(product_name)

        db.updateProduct({user_id, id, product_name, product_img, price, product_description})
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
}