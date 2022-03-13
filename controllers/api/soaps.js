const Soap = require('../../models/soap');

module.exports = {
   create,
   index, 
   show
  };
 
  async function show(req, res) {
    console.log('ctrl happy')
    try {
      const soap = await Soap.findById(req.params.id)
      res.json(soap);
    } catch (err) {
      res.send(err)
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
          soapName:req.body.soapName,
          image:req.body.image,
          description:req.body.description,
          ingredients:req.body.ingredients,
          price:req.body.price,
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