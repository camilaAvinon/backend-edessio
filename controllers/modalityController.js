const modalityModel = require('../models/modalityModel');

// Call - Funciona
exports.call = async (req, res) => {
    try{
        const modality = await modalityModel.find();
        if(modality){
            res.json({
                msg:'Modalities:',
                data: modality
            });
        }else{
            res.json({msg:'Not found.'});
        }
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Call by id  - Funciona
exports.callById = async (req, res) => {
    try {
        const { modalityId } = req.params;
        const modality = await modalityModel.findById(modalityId);
        if (modality){
            res.json({
                msg: 'Modality: ',
                data: modality
            });
        } else {
            res.json({msg: 'Not found.'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({msg:'Server error.'});
    }
}


