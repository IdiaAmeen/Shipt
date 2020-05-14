const monoogse = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        name: { type: String, required: true },
        imgURL: { type: String, required: true },
        price: { type: String, required: true },
        weight: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model("prodeucts", Product)