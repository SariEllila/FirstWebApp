const Users = require('../models/users');
const argon2 = require("argon2");
// const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;


const findAll = async (req, res) =>{
    try{
        const users = await Users.find({});
        res.send(users);
    }
    catch(e){
        res.send({e})
    }
}


const add = async (req, res) => {
    let { user } = req.body;
    try{
        const done = await Users.create({...user});

        if (done){
            res.send(`user ${user.username} was added successfully`)
            }
        else {
            res.send(`user ${user.username} could not be added`)
        }
    }
    catch(e){
        res.send(e)
    }
}


const del = async (req, res) => {
    console.log('delete!!!')
    let { username } = req.body;
    try{
        const removed = await Users.deleteOne({username});

        if (removed){
            res.send(`${username} was deleted successfully`)
            }
        else if (!username) {
            res.send(`${username} was not found or not deleted successfully`)
        }
    }
    catch(error){
        res.send({error});
    };
}


const update = async (req, res) => {
    let {old_user, new_user} = req.body;
    try{
        const updated = await Users.findOneAndUpdate(
            { username: old_user }, new_user 
        );
        if(updated){
            res.send(`${old_user} was updated successfully`);}
            else {
               res.send(`${old_user} user could not be updated`)
           }

    }
    catch(error){
        res.send({error});
    };
}


const register = async (req, res) => {
  const salt = "random123";
  const { email, password, password2 } = req.body;
  if (!email || !password || !password2) {
    return res.json({ ok: false, message: "All fields required" });
  }
  if (password !== password2) {
    return res.json({ ok: false, message: "Passwords do not match" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ ok: false, message: "Invalid email" });
  }
  try {
    const user = await User.findOne({ email });
    if (user) return res.json({ ok: false, message: "User exists!" });
    const hash = await argon2.hash(password, salt);
    const hash2 = await argon2.hash(password);
    console.log("hash ==>", hash);
    console.log("hash2 ==>", hash2);
    const newUser = {
      email,
      password: hash,
    };
    await User.create(newUser);
    res.json({ ok: true, message: "Successfully registered" });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ ok: false, message: "Invalid email provided" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ ok: false, message: "Invalid user provided" });
    const match = await argon2.verify(user.password, password);
    if (match) {
      const token = jwt.sign({ userEmail: user.email }, jwt_secret, {
        expiresIn: "1h",
      }); 
      res.json({ ok: true, message: "Welcome back", token, email });
    } else return res.json({ ok: false, message: "Invalid data provided" });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

const verify_token = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, succ) => {
    err
      ? res.json({ ok: false, message: "Token is corrupted" })
      : res.json({ ok: true, succ });
  });
};


module.exports = {
    findAll,
    add,
    del,
    update,
    verify_token,
    login,
    register
}