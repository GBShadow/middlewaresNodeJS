const projects = require('../database/data');


module.exports = {

    index(req, res) {
        return res.json(projects);
    },

    store(req, res) {
        const { id, title } = req.body;

        const project = {
            id,
            title,
            tasks: []
        };

        projects.push(project);

        return res.json(project);
    },

    update(req, res) {
        const { id } = req.params;
        const { title } = req.body;

        const project = projects.find(p => p.id == id);
        project.title = title;

        return res.json(project);
    },

    destroy(req, res) {
        const { id } = req.params;

        const projectId = projects.find(p => p.id == id);

        projects.splice(projectId, 1);

        return res.send();
    },

    storeTask(req, res) {
        const { id } = req.params;
        const { title } = req.body;

        const project = projects.find(p => p.id == id);

        project.tasks.push(title);

        return res.json(project);
    },
}