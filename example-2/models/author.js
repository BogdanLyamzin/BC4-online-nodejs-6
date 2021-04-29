const {Schema, model} = require("mongoose");

const authorSchema = Schema({
    email: {
        type: String,
        require: [true, "Email must be exist!"],
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: [6, "Password length must have min 6 letter"]
    },
    age: {
        type: Number,
        require: true,
        min: 0
    },
    country: {
        type: String,
        enum: ["Ukraine", "USA", "UK"]
    },
    passportCode: {
        type: String,
        require: true,
        match: /^[A-Z]{2}[1-9]{6}$/g,
        validate: {
            validator(value){
                return /^[A-Z]{2}[1-9]{6}$/g.text(value)
            },
            message: props => `${props.message}`
        }
    }
})

const Author = model("author", authorSchema);

module.exports = Author;