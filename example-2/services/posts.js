const {Post} = require("../models");

const getAll(query){
    return Post.find(query);
}

const getOne(id){
    return Post.findOne({_id: id});
}

const add = (newPost)=> {
    return Post.create(newPost);
}

module.exports = {
    add,
    getAll,
    getOne
}