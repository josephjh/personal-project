module.exports = {
    getCart: async (req, res)  =>{
        const {user_id} = req.session.user;
        const db = req.app.get('db');

        const resp = await db.getCart({user_id});
        res.status(200).send(resp)
    }
}