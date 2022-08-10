const Soap = require('../../models/soap');
const Review = require('../../models/review');

module.exports = {
    create, 
    index,
    // deleteReview,
}

async function create(req, res) {
    try {
       const newReview = new Review({
            message: req.body.message,
            rating: req.body.rating,
            user: req.body.user
       })
        await newReview.save();
        Soap.findById(req.params.id, function(err, soap) {
            soap.reviews.push(newReview);
            soap.save();
        })
        res.json(newReview)
    } catch(err) {
        res.send(err)
    }
}

async function index(req, res) {
    try {
        const reviews = Review.find({})
        res.json(reviews)
    } catch (err) {
        res.send(err)
    }
}


// async function deleteReview(req, res) {
//     return req.body
// }