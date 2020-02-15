const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//Set up static resources
app.use('/static', express.static('public'));
// Use pug to create pages
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

//Three route files: Main, Projects, and about
app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

app.use((req, res, next) => {
    const err= new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=> {
    res.locals.error = err;
    res.status(err.status);
    console.log('Error occured!');
    console.log(`Error Status: ${err.status}`);
    console.log(`Error Message: ${err.message}`);
    console.log(`Error Stack: ${err.stack}`);
    res.render('error', err);
});

app.listen(3000, () => {
    console.log('The server is up and running on port 3000')
});
