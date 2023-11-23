const mongoose = require('mongoose');

// Conexion con la base de datos
mongoose.connect( 'mongodb+srv://camilaavinon:4naRSLySvWSTRb4g@cluster0.pqqu3sg.mongodb.net/?retryWrites=true&w=majority' , { // Ver como seria el tema del password seguro
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;
