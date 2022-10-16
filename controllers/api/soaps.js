const Soap = require('../../models/soap');

module.exports = {
   create,
   index, 
   show,
   createReview,
   showReviews
  };

  async function createReview(req, res) {
    const post = req.body;
    const soap = await Soap.findById(req.params.id);
    try {
      soap.reviews.push(post);
      soap.save()
      res.status(201).json(soap)
    } catch(error) {
      console.log(error)
      res.status(409).json({ message: error.message })
    }
  }
  
  async function showReviews(req, res) {
    try {
      const soap = await Soap.findById(req.params.id);
      const reviews = soap.reviews;
      res.status(200).json(reviews)
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message })
    }
  }
  
  async function show(req, res) {
    try {
      const soap = await Soap.findById(req.params.id)
      res.json(soap);
    } catch (error) {
      res.send(error)
    }
  }
  
  async function index(req, res) {
    try {
      const soaps = await Soap.find({}).sort('name').populate('category').exec()
      soaps.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
      res.json(soaps);
    } catch (err) {
      res.send(err)
    }
  }

  async function create(req, res) {
    try {
        const newSoap = new Soap({
          name:req.body.name,
          image:req.body.image,
          description:req.body.description,
          ingredients:req.body.ingredients,
          price:req.body.price,
          stock:req.body.stock,
          category:req.body.category,
          timestamps: req.body.timestamps
        });
       await newSoap.save();
       res.json(newSoap);
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}