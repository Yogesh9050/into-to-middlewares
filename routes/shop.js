const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode= 200;
    res.setHeader('content-type', 'text/html');
    res.send(
        `<h1>This is Shop page.</h1>`
    );
});


module.exports = router;