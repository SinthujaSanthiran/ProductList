const express = require('express');
const router = express.Router();

const product = require('../models/products');


//retreiving products
router.get('/products',(_req,res,_next)=>{
    product.find(function(_err,products){
         res.json(products);
   })
});

// add products
router.post('/products',(req,res,_next)=>{


    console.log(req.body)
    let newproduct = new product({
       productname:req.body.productname,
       brandname:req.body.brandname,
       shelvenumber:req.body.shelvenumber,
       AvailableQuantity:req.body.AvailableQuantity,
       price:req.body.price,
       Purchasedate:req.body.Purchasedate
    });
    newproduct.save((err,_products)=>{
if(err){
    res.json({msg: err});
}
else{
    res.json({msg:'Product added successfully'});
}
   }); 
});

//delete products
router.delete('/products/:id',(req,res,_next)=>{
    product.remove({_id: req.params.id}, function(err,result) 
    {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

//update
router.put('/products/:id',(req,res,_next)=>{
    product.put({_id: req.params.id}, function(err,result) 
    {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports= router;