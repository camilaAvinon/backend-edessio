const subjectModel = require('../models/subjectModel');

// Llamar a todas
// Llamar por ID
// Crear - En un futuro se van a crear por ahora vienen "cargadas"

//Crear
// exports.create = async (req, res)=> {
//     try {
//         const {name} = req.body;
//         // Validaciones
//         if (!name){
//             res.status(400).json({msg: 'Se enviarion campos vacíos.'});
//         } else if (typeof name != 'string'){
//             res.status(400).json({msg: 'La materia ingresada no es valida.'});
//         }
//         const newSubject = new subjectModel({
//             name: name
//         });
//         // Creando la materia
//         await newSubject.save();
//         res.status(201).json({
//             msg: 'Materia guardada.',
//             id: newSubject._id
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ msg:'Error en el servidor.' })
//     }
// }

// Call - Funciona
exports.call = async (req, res) => {
    try {
        const subjects = await subjectModel.find();
        if(subjects){
            res.json({
                msg: 'Subjects:',
                data: subjects
            });
        } else {
            res.json({msg: 'Not found.'})
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({msg: 'Server error.'});
    }
}

// Call by id - Funciona
exports.callById = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const subject = await subjectModel.findById(subjectId);
        if (subject){
            res.json({
                msg: 'Subject',
                data: subject
            });
        } else {
            res.json({msg: 'Not found'});
        }
    } catch (e) {
        console.error(e);
        res.status(500).json( { msg: 'Server error.' });
    }
}