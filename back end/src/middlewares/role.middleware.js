//? Previamente tiene que pasar por el middleware de autenticación

const roleMiddleware = (req, res, next) => {
    if(req.user.role === 'admin'){
        next() //permite pasar a la siguiente función
    } else {
        res.status(401).json({message: 'Permission Denied'})
    }
}


module.exports = roleMiddleware

