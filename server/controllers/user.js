const Users = require('../models/users');


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
        else {
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


module.exports = {
    findAll,
    add,
    del,
    update
}