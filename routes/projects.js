const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    
    try {
        const project = projects[id];
        const projectName = project.project_name;
        const description = project.description;
        const technologies = project.technologies;
        const live_link = project.live_link;
        const github_link = project.github_link;
        const image_urls = project.image_urls;

        const projectData = {projectName, description, technologies, live_link, github_link, image_urls};
        
        if (project === undefined) {
            throw 404;
        }
        res.render('project', projectData);
    }
    catch(err) {
        console.log('caught error ' + err);
        if (err === 404) {
            res.sendStatus(404);
        }
    }
});

router.get('/', (req, res) => {
    const tempID = Math.floor(Math.random() * cards.length)
    res.redirect(`/cards/${tempID}?side=question`)
});
module.exports = router;