const Products = require('../models/products');


const findAll = async (req, res) =>{
    try{
        const products = await Products.find({});
        res.send(products);
    }
    catch(e){
        res.send({e})
    }
}


const add = async (req, res) => {
    let { product } = req.body;
    try{
        const done = await Products.create({...product});

        if (done){
            res.send(`product ${product.name} was added successfully`)
            }
        else {
            res.send(`product ${product.name} could not be added`)
        }
    }
    catch(e){
        res.send(e)
    }
}


const del = async (req, res) => {
    console.log('delete!!!')
    let { product, size, color } = req.body;
    try{
        const removed = await Products.deleteOne({name: product, size: size, color: color});

        if (removed){
            res.send(`${product} was deleted successfully`)
            }
        else {
            res.send(`${product} was not found or not deleted successfully`)
        }
    }
    catch(error){
        res.send({error});
    };
}


const update = async (req, res) => {
    let {old_product, new_product} = req.body;
    try{
        const updated = await Products.findOneAndUpdate(
            { name: old_product },{ name: new_product } 
        );

        if(updated){
            res.send(`${old_product} was updated successfully`);}
            else {
               res.send(`${old_product} product could not be updated`)
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