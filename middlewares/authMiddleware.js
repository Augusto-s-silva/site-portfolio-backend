const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido'});
    }
}

module.exports = authMiddleware;