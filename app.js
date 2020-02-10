const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

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
    res.render('error', err);
});

app.listen(3000, () => {
    console.log('The server is up and running on port 3000')
});
