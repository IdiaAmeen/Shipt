const jwt = require('jasonwebtoken')
const User = require('../models/user')
const TOKEN_KEY = 'ourgroupisthebestgroup'

const restrict = async (req, res, next) => {
    const token = req.headers.authorication.split(" ")[1]
    console.log(token)

    //! jwt verify function checks if token matches secrets.
    //! returns the decoded token if the secret matches.
    const decodedToken = jwt.verify(token, TOKEN_KEY)
    //! verify decodes
    if (decodedToken) {
        const user = await User.findOne({ username: decodedToken.username })
        //! if response is true, return user informaiton
        //! setting local vairable in-response to the user
        res.locals.user = user
        //! next sends it to the controller
        next()
    }
    throw new Error('Invalid token')
}
module.exports = { restrict }