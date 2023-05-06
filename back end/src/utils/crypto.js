const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashedPassword) => { //scope de funciones, este "plainPassword" sólo tiene válidez dentro de esta función
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


module.exports = {
    hashPassword,
    comparePassword
}