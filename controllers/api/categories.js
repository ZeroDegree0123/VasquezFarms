const Category = require('../../models/category');

module.exports = {
    index,
    create
};

async function index(req, res) {
    try {
        const newCat = await new Category({
            catName: req.body.name,
            sortOrder: req.body.sortOrder
        });
        newCat.save();
    } catch (err) {
        console.log(error)
    }
}