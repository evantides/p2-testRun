const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables.js')

//model goes here

//Index
router.get('/', (req, res)=> {
    Vegetable.find({}, (err, allVeg)=> {
        res.render ('vegetables/Index.jsx',
            { vegetables: allVeg}
        )})
})

// New
router.get('/new', (req,res)=> {
    res.render('vegetables/New')
})

// DELETE

router.delete('/:id',(req,res)=> {
    Vegetable.findByIdAndRemove(req.params.id, (err, veg) => {
        res.redirect('/vegetables');
    });
})

//UPDATE
router.put('/:id', (req, res)=> {
    req.body.isGreen = req.body.isGreen === "on" ? true : false;
    Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/vegetables');
    });
})

// Create
router.post('/', (req, res) => {
    if (req.body.isGreen === "on") {
        req.body.isGreen = true;
    } else {
        req.body.isGreen = false;
    }
    Vegetable.create(req.body, (err,createdVeg)=> {
        res.redirect('/vegetables')
    })
})

//EDIT
router.get('/:id/edit',(req,res)=>{
    Vegetable.findById(req.params.id, (err, foundVeg) => {
        // render the edit view and pass it the found fruit
        res.render('vegetables/Edit', {
            vegetable: foundVeg
        })
    });
})


//SHOW
router.get('/:id', (req, res) => {
    // Find the specific document
    Vegetable.findById(req.params.id, (error, foundveg) => {
        // render the Show route and pass it the foundFruit
        res.render('vegetables/Show', {
            vegetable: foundveg
        });
    });
});


module.exports = router;