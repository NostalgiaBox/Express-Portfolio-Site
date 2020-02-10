const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');
//const { cards } = data;

router.get('/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const project = projects[id - 1];
        if (project === undefined) {
            let error = new Error('404');
            error.status = 404;
            error.message = "The page you tried to navigate to is nto found.  Pleaseuse a valid project number"
            throw error
        }
        const projectName = project.project_name;
        const description = project.description;
        const technologies = project.technologies;
        const live_link = project.live_link;
        const github_link = project.github_link;
        const image_urls = project.image_urls;

        const projectData = {projectName, description, technologies, live_link, github_link, image_urls};
        
        
        res.render('project', {projectData});
    }
    catch(err) {
        console.log('caught error ' + err);
        next(err);
    }
});

router.get('/', (req, res) => {
    const tempID = Math.floor(Math.random() * projects.length)
    res.redirect(`/projects/${tempID}`)
});
module.exports = router;