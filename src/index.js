const express = require('express'); 
const routes = require('./routes');



const app = express();
require('../config/DBconfig');




app.use(express.json()); /*interpretar para enviar json*/
app.use(routes);

app.listen(3333);