const db = require('../db')
const products = require('../JSON/products.json')
// const users = require('../JSON/users.json')
const Product = require('../models/product')
const User = require('../models/user')

db.on('error', console.error.bind(console, "MongoDB connection error!"))

const productSeed = async () => {
    await Product.insertMany(products)
}

// const userSeed = async () => {
//   await userSeed.insertMany(users)
//   console.log("Created Many Users!");
// }

const run = async () => {
    await productSeed()
    db.close()
}

run()