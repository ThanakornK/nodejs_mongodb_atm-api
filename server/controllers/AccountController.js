const Account = require('../models/Account')

const show = (req, res, next) => {
    let lg_email = req.body.email
    let lg_password = req.body.password
    Account.findOne({ email: lg_email })
        .then(user => {
            if (user) {
                if (new String(user.password).valueOf() == new String(lg_password).valueOf()) {
                    res.json({
                        user
                    })
                } else {
                    console.log(user.password)
                    res.json({
                        message: 'Password incorrect.'
                    })
                }
            } else {
                res.json({

                    message: 'No user found!'
                })
            }
        })

    // if(user) {
    //     if( new String(user.password).valueOf() == new String(lg_password).valueOf()) {
    //         res.json({
    //             user
    //         })
    //     }else{
    //         res.json({
    //             message: 'Password incorrect.'
    //         })
    //     }
    // }else{
    //     res.json({

    //         message: 'No user found!'
    //     })
    // }

}

// add new account
const add = (req, res, next) => {
    let account = new Account({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        balance: req.body.balance
    })
    account.save()
        .then(response => {
            res.json({
                message: 'Account add success.'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

// update balance
const updateBalance = (req, res, next) => {
    let accountID = req.body.accountID

    let updateData = {
        balance: req.body.balance
    }

    Account.findByIdAndUpdate(accountID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'Balance update success.'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

// delete an account
const destroy = (req, res, next) => {
    let accountID = req.body.accountID
    Account.findByIdAndRemove(accountID)
        .then(() => {
            req.json({
                message: 'Account deleted success.'
            })
        })
        .catch(error => {
            req.json({
                message: 'An error Occured'
            })
        })
}

module.exports = {
    show, add, updateBalance, destroy
}