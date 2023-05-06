const uuid = require('uuid')
const { findUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const RecoveryPassword = require('../models/recoveryPasswords.models')

const checkUsersCredentials = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password) // null.password = undefined (si usuario no existiera)
        if(verifyPassword){
            return user
        } 
        return null
    } catch (error) {
        return null //si fuese "error" devolvería un objeto, el cual genera un token no válido
    }
}

const createRecoveryToken = async (email) => {
    try {
        const user = await findUserByEmail(email)
        const data = await RecoveryPassword.create({
            id: uuid.v4(),
            userId : user.id
        })
        return data
    } catch (error) {
        return error
    } 
} 


module.exports = {
    checkUsersCredentials,
    createRecoveryToken
}