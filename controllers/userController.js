const userModel = require('../models/userModel');
const professorModel = require('../models/professorModel');
const roleModel = require('../models/roleModel');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 10;
//Preguntar como es el tema de no compratir la key
const key =  "edessio";

// Autenticar
// exports.auth = async (req, res) => {
//     try {
//         const {email,password} = req.body;
//         if (!email || !password ){
//             res.status(400).json({msg:'There are empty fields.'});
//         }
//         const user = await userModel.findOne( {email} );
//         if (!user){
//             res.status(401).json({msg:'Not found.'});
//         }
//         const validPassword = await bcrypt.compare(password,user.password);
//         if (!validPassword){
//             res.status(401).json({msg:'Invalid credentials.'});
//         }
//         const token = jwt.sign({userId:user._id},key,{expiresIn:'2h'}); //Ver cuanto poner de expiresIn
//         res.status(201).json({ 
//             msg:'User authenticated.', 
//             token
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({msg:'Server error.'});
//     }
// }

// Create
exports.create = async( req, res ) => {
    try {
        const { name, email, password, isPro, role, birth } = req.body;
        if( !name || !email || !password  || !role || !birth ){
            // res.status(400).json({msg:'There are empty fields.'});
            console.log('campos vacíos');
        } else if (typeof name != 'string'){
            // res.status(400).json({ msg:'Name is not valid.'});
            console.log('nombre no valido');
        } else if (typeof email != 'string'){
            // res.status(400).json({ msg:'Email is not valid.'});
            console.log('email no valido');
        } else if (typeof password != 'string'){
            // res.status(400).json({ msg:'Password is not valid.'});
            console.log('contraseña no valida');
        }
        const passHash = await bcrypt.hash( password, salt );
        const newUser = new userModel({
            name: name,
            email: email,
            password: passHash,
            isPro: isPro,
            role: role,
            birth: birth
        })
        await newUser.save();
        const result = await roleModel.findOne({name: "Professor"});
        if (role == result._id){
            const { subjectsId , modalityId } = req.body
            if (subjectsId == [] || !modalityId){
                res.status(400).json({msg:'There are empty fields.'});
            // } else if (subjectsId.empty()){ // Validar ids de las materias
            //     res.status(400).json({ msg:'Subjects are not valid.'});
            } else if (typeof modalityId != 'string' && modalityId.length<12){ //Validar si la modalidad existe
                res.status(400).json({ msg:'Modality is not valid.'});
            }
            const newProfessor = new professorModel({
                userId: newUser._id,
                subjectsId: subjectsId,
                modalityId: modalityId
            })
            await newProfessor.save();
        }
        res.status(201).json({
            msg: 'User created.' , 
            id: newUser._id 
        });
    } catch (e) { // Crea los usuarios pero entra al catch
        console.log(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Update
exports.update = async (req, res) => {
    try {
        const user = req.body;
        const {userId} = req.params;
        // Puede actualizar el mail, contraseña, localidad, fecha de nacimiento. Para hacerlo pro se hace con otro?
        if( !user.name || !user.email || !user.password || !user.location || !user.birth ){
            res.status(400).json( { msg: 'There are empty fields.'});
        } else if (typeof user.name != 'string'){
            res.status(400).json({ msg: 'Name is not valid.'});
        } else if (typeof user.email != 'string'){
            res.status(400).json({ msg: 'Email is not valid.'});
        } else if (typeof user.password != 'string'){
            res.status(400).json({ msg: 'Password is not valid.'});
        } else if (typeof user.location != 'string'){
            res.status(400).json({ msg: 'Location is not valid.'});
        }
        const filter = {_id: userId};
        const passHash = await bcrypt.hash( user.password, salt );
        const data = { 
            name: user.name,
            email: user.email,
            password: passHash,
            location: user.location,
            birth: user.birth
        }
        const result = await userModel.updateOne(filter,data);
        res.json({
            msg: 'User updated.', 
            data: result  
        });
    } catch (e) {
        console.log(error);
        res.json({
            msg: 'Server error. '   
        });
    }
}

// // Eliminar
// exports.delete = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const filter = { _id: userId };
//         // Eliminando usuario
//         const result = await userModel.deleteOne(filter);
//         res.json({
//             msg: 'Usuario eliminado.', 
//             data: result  
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json( { msg: 'Error en el servidor.' });
//     }
// }

// Call
exports.call = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users){
            res.json({
                msg: 'Users', 
                data: users  
            });
        } else {
            res.json({msg:'Not found.'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Call by id
exports.callById = async (req, res) => {
    try {
        const { userId } = req.params;
        const users = await userModel.findById(userId);
        if (users){
            res.json({
                msg: 'User', 
                data: users  
            });
        } else {
            res.json({msg: 'Not found.'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({msg:'Server error.'});
    }
}