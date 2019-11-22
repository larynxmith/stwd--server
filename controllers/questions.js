// create router and reference to models
let router = require('express').Router()
let db = require('../models')

//GET all items
router.get('/', (req, res) => {
    db.Question.find()
        .then(items => {
            res.status(200).send(items)
        })
})

//POST to /questions
router.post('/', (req, res) => {
    db.Question.create(req.body)
        .then(item => {
            res.status(201).send(item)
        })
});

//PUT to /questions/:id
router.put('/:id', (req, res) => {
    db.Question.findOneAndUpdate({
        _id: req.params.id
    },
        req.body,
        {
            new: true
        })
        .then(editedItem => {
            res.send(editedItem)
        })
        .catch(err => {
            console.log(err)
            res.status(503).send({ message: 'Server Error' })
        })
});

// DELETE /questions/:idrs

router.delete("/:id", (req, res) => {
    db.Question.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            console.log(err);
            res.status(503).send({ message: "Server Error" });
        });
});

module.exports = router;