const Category = require('../../models/category');

module.exports = {
    create,
    index
};

async function index(req, res) {
    try {
        const cats = await Category.find({}).sort('catName')
        res.json(cats)
    } catch{
        res.send(err);
    }
}

async function create(req, res) {
    try {
        const newCat = new Category({
            catName: req.body.catName,
            sortOrder: req.body.sortOrder
        });
       await newCat.save();
       res.json(newCat);
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}