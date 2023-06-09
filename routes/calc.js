const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    res.redirect('/calculator')
});
router.get('/calculator', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, '../', 'templates/', 'index.html'))
})
router.get('/bmi-calculator', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, '../', 'templates/', 'bmi-calc.html'))
})

module.exports = router;
