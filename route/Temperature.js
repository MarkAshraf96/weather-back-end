const express = require('express');

const Temperature = require('../Model/Temperature');

const router = express.Router();

router.get('/', async (req, res) => {
    
    const Data = await Temperature.find({});
    
    res.send(Data);
});


//insert Order
router.post('/', async (req, res) => {
    console.log("Post orders")
    
    let temp = new Temperature({...req.body});
    temp = await temp.save();

    res.send(temp);
});


//PATCH orders/id
router.patch('/', async (req, res) => {
    if(req.body != undefined)
    {
        temp = new Temperature({...req.body});
        res.send(temp);
    }
    else
    {
        console.log(error.details);
        return res.status(404).send('Temperature Data not found!');
    }    
});

module.exports = router;