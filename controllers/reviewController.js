const reviewModel = require ('../models/reviewModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 10; //??

//Key
const key = 'edessio';

// Create (tiene que estar autenticado)
exports.create = async (req, res) => {
    try{
        // Va a tener que recibir: idAlumno, idProfesor, texto, puntaje, fecha
        const {studentId, professorId, review, score, date} = req.body;
    }catch(e){
        res.json({msg:'Server error.'});
        console.error(e)
    }
}
// Modificar?
// Eliminar?
// Call
// Call by id