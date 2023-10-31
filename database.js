const mongoose = require('mongoose');

// Conexion con la base de datos
mongoose.connect( 'mongodb://127.0.0.1:27017/edessio' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;