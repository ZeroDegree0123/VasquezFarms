const Soap = require('../../models/soap');
const Review = require('../../models/review');

module.exports = {
    create, 
    // deleteReview,
}

async function create(req, res) {
    try {
       const review = await new Review({
            message: req.body.message,
            rating: req.body.rating
        }).save()
    } catch(err) {
        console.log(err)
        res.send(err);
    }
    // Soap.findById(req.params.id, function(err, soap) {
    //         soap.reviews.push(review)
    //         soap.save(function(err) {
    //             res.redirect(`/soaps/${soap._id}`);
    //         });
    //     });
}
// Soap.findById(req.params.id, function(err, soap) {
//         soap.reviews.push(req.body);
//         soap.save(function(err) {
//                 res.redirect(`/soaps/${soap._id}`);
//             });
//         });

// async function index(req, res) {
//     try {
//         const reviews = Soap.find({reviews})
//         res.json(reviews)
//     } catch (err) {
//         res.send(err)
//     }
// }


// async function deleteReview(req, res) {
//     return req.body
// }