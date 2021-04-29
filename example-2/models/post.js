const {Schema, model} = require("mongoose");

const postSchema = Schema({
    name: {
        type: String, 
        required: [true, "name must be exist"]
    },
    text: {
        type: String, 
        required: [true, "text must be exist"]
    }
});

const Post = model("post", postSchema);

module.exports = Post;