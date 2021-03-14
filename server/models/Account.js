const { Double } = require('bson')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AccountSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    balance: {
        type: Number
    }
})

const Account = mongoose.model('Account', AccountSchema)

module.exports = Account