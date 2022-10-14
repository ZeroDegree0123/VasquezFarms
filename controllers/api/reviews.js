const Soap = require('../../models/soap');
const Review = require('../../models/review');

module.exports = {
    create,
    index 
    // deleteReview,
}

async function create(req, res) {
    const post = req.body;
    const newPost = new Review(post)
    try {
       await newPost.save();

       res.status(201).json(newPost)
    } catch(error) {
        console.log(error)
        res.status(409).json({ message: error.message});
    }
}

async function index(req, res) {
    try {
        const reviews = await Review.find()
        res.status(200).json(reviews)
    } catch (err) {
        res.send(err)
    }
}
