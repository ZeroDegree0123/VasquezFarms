const jwt = require('jsonwebtoken');
const User = require('../../models/user')
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login, 
    checkToken
}


async function create(req, res) {
  try {
    // Add the user to the dataBase
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // yes we can serialize a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

// helper function 
function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h'}
    )
  }
  
async function checkToken(req, res) {
  console.log(req.user);
  console.log(req.exp);
  res.json(req.exp);
};