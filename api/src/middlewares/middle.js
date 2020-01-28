const projects = require('../database/data');

module.exports = {

    verify(req, res, next) {

        const { id } = req.params;

        const project = projects.find(p => p.id == id);

        if (!project) {
            return res.status(400).send({ error: "Project don't exist" });
        }

        return next();
    },

    log(req, res, next) {

        console.count("Numero de requisições");

        return next();
    }
}