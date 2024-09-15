const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', name: 'Taha' });
});

module.exports = router;