const Category = require('../../models/category');

module.exports = {
    create,
    index
};

async function index(req, res) {
    try {
        const cats = await Category.find({}).sort('name')
        res.json(cats)
    } catch{
        res.send(err);
    }
}

async function create(req, res) {
    try {
        const newCat = new Category({
            name: req.body.name,
            sortOrder: req.body.sortOrder
        });
       await newCat.save();
       res.json(newCat);
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}