const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
   // const username = req.cookies.username;
    //if (username){
        console.log(projects)
    res.render('index', {projects});
});




module.exports = router;

