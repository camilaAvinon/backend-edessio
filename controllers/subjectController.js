const subjectModel = require('../models/subjectModel');

// Llamar a todas
// Llamar por ID
// Crear

//Crear
exports.create = async (req, res)=> {
    try {
        const {name} = req.body;
        // Validaciones
        if (!name){
            res.status(400).json({msg: 'Se enviarion campos vacíos.'});
        } else if (typeof name != 'string'){
            res.status(400).json({msg: 'La materia ingresada no es valida.'});
        }
        const newSubject = new subjectModel({
            name: name
        });
        // Creando la materia
        await newSubject.save();
        res.status(201).json({
            msg: 'Materia guardada.',
            id: newSubject._id
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg:'Error en el servidor.' })
    }
}

//Lamar a todos
exports.call = async (req, res) => {
    try {
        // Llamando materias
        const subjects = await subjectModel.find();
        if(subjects){
            res.json({
                msg: 'Lista de materias',
                data: subjects
            });
        } else {
            res.json({msg: 'No se encontro la informacion.'})
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({msg: 'Error en el servidor.'});
    }
}

//Llamar por id
exports.callById = async (req, res) => {
    try {
        const { subjectId } = req.params;
        // Llamando materia
        const subject = await subjectModel.findById(subjectId);
        if (subject){
            res.json({
                msg: 'Materia',
                data: subject
            });
        } else {
            res.json({msg: 'Materia no encontrada'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json( { msg: 'Error en el servidor.' });
    }
}