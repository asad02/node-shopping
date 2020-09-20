const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: 'You found the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You pass an ID ' + id
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'You updated a product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'You deleted a product!'
    });
});

module.exports = router;
