const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const Middleware = require('./middlewares/middle');

routes.use(Middleware.log);

routes.post('/projects', ProjectController.store);
routes.get('/projects', ProjectController.index);


routes.put('/projects/:id', Middleware.verify, ProjectController.update);
routes.delete('/projects/:id', Middleware.verify, ProjectController.destroy);
routes.post('/projects/:id/tasks', Middleware.verify, ProjectController.storeTask);

module.exports = routes;