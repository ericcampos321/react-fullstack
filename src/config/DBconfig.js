const mongoose = require('mongoose');

const DBconfig = 'mongodb+srv://ericaguiar_:&7!Es3,KkiCv45S@cluster0.8wvwwc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const connection = mongoose.connect(DBconfig,{
    userNewUrlParser:true,
    userUnifiedTopology:true
});

module.exports = connection;