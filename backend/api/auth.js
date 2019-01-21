const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')


module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password)
            return res.status(400).send('Usuário ou senha não informados')
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()
        if (!user) return res.status(400).send('E-mail não encontrado. Realize o cadastro!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send("Senha inválida")
        //Loggin OK! 
        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)

        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })


    }
    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date) {
                    return res.send(true) // <- é possível atualizar a duração do token
                }

            }
        } catch (e) {
            //token não é válido ou não existe
            res.send(false)
        }
    }
    return { signin, validateToken }
}