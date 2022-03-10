const Soap = require('../../models/soap');

module.exports = {
   create
  };


  async function create(req, res) {
    console.log('ctrl happy')
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