const express = require('express');
const roules = express.Router();

const AnnotationController = require('./controllers/AnnotationController');


//Rota Annotation
routes.get('/annotation', AnnotationController.create)

module.exports = routes;