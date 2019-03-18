module.exports = {
    addProduct: async (req, res) => {
        const {productName, price, productImage, type, make, description} = req.body
        const db = req.app.get('db');
        let item = db.add_Product({productName, price, productImage, type, make, description})
        res.status(200).send(item)
    }
}