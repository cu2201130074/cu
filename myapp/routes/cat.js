const express = require('express');
const router = express.Router();
const request = require('request');

const cors = require('cors');
router.use(cors());

router.get('/', async (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
})

module.exports = router;
