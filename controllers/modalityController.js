const modalityModel = require('../models/modalityModel');

// Se llaman por id (nada más creo)

// Llamando por id
exports.callById = async (req, res) => {
    try {
        const { modalityId } = req.params;
        // Llamando materia
        const modality = await modalityModel.findById(modalityId);
        if (modality){
            res.json({
                msg: 'Modalidad',
                data: modality
            });
        } else {
            res.json({msg: 'Modalidad no encontrada'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json( { msg: 'Error en el servidor.' });
    }
}


