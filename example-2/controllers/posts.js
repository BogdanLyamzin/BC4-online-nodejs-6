const {postsService} = require("../services");

const getAll = (req, res, next) => {
    const {query} = req;
    try {
        const results = await postsService.getAll(query);
        res.json({
            status: "success",
            code: 200,
            data: {
                results
            }
        })
    }
    catch(error){
        next(error)
    }
}
// findByIdAnndDelete
// findByIdAndUpdate
const getOne = (req, res, next) => {
    const {id} = req.params;
    try{
        const result = await postsService.getOne(id);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error)
    }
}

const add = (req, res, next) => {
    const {body} = req;
    try {
        const result = await postsService.add(body);
        res.json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    add,
    getAll,
    getOne
}