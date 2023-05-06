const nodemailer = require('nodemailer')
const config = require('../../config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'andresmelita1995@gmail.com',
        pass: config.api.emailPass
    },
    //soluciona problema con certficado autofirmado
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter
