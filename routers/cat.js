const express = require('express');
const Cat = require('../models/Cat');

const routerCat = express.Router();

// Middleware
routerCat.use(express.json());

routerCat.get('/', async (req, res) => {
    const allCat = await Cat.find();
    res.send(JSON.stringify(allCat));
});

// End Routing

// METHOD POST
routerCat.post('/', (req, res) => {
    const { cat } = req.body;
    const newCat = new Cat({cat});
    newCat.save()
    .then( () => {
        console.log('save data');
        res.status(200).send(JSON.stringify('save data'));
    })
    .catch(err => res.status(404).send(JSON.stringify(err)));
});

// PATCH
routerCat.patch('/:_id', async (req, res) => {
    let {cat} = req.body;
    let {_id} = req.params;

    await Cat.findOneAndUpdate({_id}, {cat})
    .then( () => {
        res.status(200).send(JSON.stringify(`ID: ${_id} was updated`));
    })
    .catch(err => console.log(err));
});

// DELETE
routerCat.delete('/:_id', async (req, res) => {
    let {_id} = req.params;

    await Cat.deleteOne({_id})
    .then( () => {
        res.status(200).send(JSON.stringify(`ID: ${_id} was deleted`));
    })
    .catch(err => console.log(err));

});

module.exports = routerCat;