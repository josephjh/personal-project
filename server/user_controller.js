const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req,res) => {
        const {firstName, lastName, username, email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let takenUsername = await db.check_username({username});
        takenUsername = +takenUsername[0].count;
        if(takenUsername !== 0){
            return res.sendStatus(409)
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let user = db.register_user({username, email, password:hash, firstName, lastName});
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
        } else {
            res.sendStatus(401)
        }
    },
    logout: (req, res) => {
        const db = req.app.get('db');

        db.logout().then(res => {
            req.session.destroy
        })
    },
    session: (req, res) => {
        res.send(req.session.user)
    }
}