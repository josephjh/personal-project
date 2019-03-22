const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req,res) => {
        const {first_name, last_name, username, email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let takenUsername = await db.check_username({username});
        takenUsername = +takenUsername[0].count;
        if(takenUsername !== 0){
            return res.sendStatus(409)
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let user = db.register_user({username, email, password:hash, first_name, last_name});
        user = user[0];
        session.user = user;
        res.status(200).send(session.user)
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.login({username});
        user = user[0];
        if (!user) {
            return res.sendStatus(404)
        }
        let authenticated = bcrypt.compareSync(password, user.password);
        if (authenticated) {
            delete user.password;
            session.user = user;
            res.status(200).send(session.user)
            console.log(session)
        } else {
            res.sendStatus(401)
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    session: (req, res) => {
        console.log(req.session.user)
        res.send(req.session.user)
    }
}