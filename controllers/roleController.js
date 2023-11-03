const roleModel = require('../models/roleModel');

// Llamar por id
// Llamar todos

// Get all
exports.call = async (req, res) => {
    try {
        const roles = await roleModel.find();
        if (roles){
            res.json({
                msg: 'Roles:',
                data: roles
            });
        }else{
            res.json({msg: 'Not found.'});
        }
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}

//Get by id
exports.callById = async (req, res) => {
    try {
        const {roleId} = req.params;
        const role = await roleModel.findById(roleId);
        if (role) {
            res.json({
                msg:'Role:',
                data: role
            });
        }else{
            res.json({msg:'Not found.'});
        }

    } catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'})
    }
}