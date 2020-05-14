const db = require('../db');
const User = require('../models/user')
const Product = require('../models/product')

db.on("error", console.error.bind(console, "MongoDB Connection Error"));


/* -------------------------------------------------------------------------- */
/*                                    users                                   */
/* -------------------------------------------------------------------------- */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SALT_ROUNDS = 11;
const TOKEN_KEY = 'DanielRadcliffeLooksWeirdEvenInHis30s'

const signUp = async (request, response) => {
    try {
        //! grab username, email and password from the body of the page.
        const { username, email, password } = request.body;
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await new User({
            username,
            email,
            password_digest
        })//! using the Models method to create new user

        await user.save(); //! save user in json format with password_digest


        //! payload is information we want to pass on to the user.
        //! allows you to authenticate back in.

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        //! create Encryption by merging payload and Token
        const token = jwt.sign(payload, TOKEN_KEY);
        //! sign encodes
        return response.status(201).json({ user, token });
        //! status code: 201 => continue
    }
    catch (error) {
        console.log("Worked till the Sign Up controller. There's an error now");
        return response.status(400).json({ error: error.message });
    }
}


const signIn = async (request, response) => {
    try {
        //! get username and password from body
        const { username, password } = request.body;
        //! const username = request.body.username

        const user = await User.findOne({ username: username })

        //! bcrypt.compare automatically hashes entered password
        //! if bcrypt.compare password matches previous digest, 
        if (await bcrypt.compare(password, user.password_digest)) {

            const payload = {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        }
    }
}














/* -------------------------------------------------------------------------- */
/*                                  Products                                  */
/* -------------------------------------------------------------------------- */

const getProducts = async (request, response) => {
    try { //! there is no request, there is response'
        const products = await Product.find();
        //! this finds all products
        response.json(products);
        //! converts to json;
    }
    catch (error) {
        response.status(500).json({ error: error.message })
        //! 500 = Internal Server Error;
    }
}


const getProduct = async (request, response) => {
    try {
        const { id } = request.params;
        //! find params. :id is what's passed on the new window
        const product = await Product.findById(id);
        //! find product by id;
        if (product) { //! if product isTrue
            return response.json(product)
        }
        response.status(404).json({ message: "Product Not Found!" });
        //! 404 = Not Found
    }
    catch (error) {
        response.status(500).json({ error: error.message })
        //! 500 = Internal Server Error;
    }
}


const createProduct = async (request, response) => {
    try {
        const product = await new Product(request.body)
        //! request service works from the model folder
        //! when requesting body, new product is created
        //! whatever is written will be converted to json
        await product.save();

        response.status(201).json(product);
        //! 201 = created/proceed;
    }
    catch (error) {
        console.log(error);
        response.status(500).json({ error: error.message });
        //! 500 = Internal Server Error;
    }
}

const updateProduct = async (request, response) => {
    const { id } = request.params; // const id = request.params.id
    await Product.findByIdAndUpdate(
        id, //! find product by param
        request.body, //! request id's body
        { new: true }, //! make new body using Method
        (error, product) => {  //! if not found / if found
            if (error) {
                return response.status(500).json({ error: error.message })
                //! 500 = Internal Server Error
            }
            if (!product) {
                return response.status(404).json({ message: "Product Not Found" });
                //! 404 = Not Found
            }
            //! if Everything returns False, continue with action.
            response.status(200).json(product);
            //! 200 = Ok to proceed.
        })
}


const deleteProduct = async (request, response) => {
    try {
        const { id } = request.params;

        const deleted = await Product.findByIdAndDelete(id);
        //! find product id;

        if (deleted) { //! if Product.findByIdAndDelete is true,  it will be deleted
            //! if true, return =>
            return response.status(200).send("Product Deleted")
        }
        //! else if Product.findByIdAndDelete is false,  there's nothing to delete
        throw new Error("Product Not Found!");
    }
    catch (error) {
        {
            response.status(500).json({ error: error.message });
            //! 500 = Internal Server Error;
        }
    }
}





module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}