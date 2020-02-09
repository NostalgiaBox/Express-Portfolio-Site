const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   // const username = req.cookies.username;
    //if (username){
    res.render('index');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

router.get('/hello', (req, res) => {
    const username = req.cookies.username;
    if (username){
        res.redirect('/');
    }else {
       res.render('hello');
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});



module.exports = router;
