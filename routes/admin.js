const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode=200;
    res.setHeader('content-type', 'text/html');
    res.end(
        `<h1>This is admin panel.</h1>`
    )
});

module.exports = router;