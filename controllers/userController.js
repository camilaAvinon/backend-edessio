const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 10;

//Preguntar como es el tema de no compratir la key
const key =  "blog";

// Se crean, modifican, eliminan (o se "eliminan para no perder la información"), se llaman por id, se llaman todos, y se autentican (?)

// // Autenticar
// exports.auth = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password ){
//             res.status(400).json( { msg: 'Se enviaron campos vacios.' } );
//         }
//         const user = await userModel.findOne( {email} );
//         if ( !user ){
//             res.status(401).json({ msg: 'El usuario ingresado no coincide con nuestros registros.' });
//         }
//         // Validando la contraseña
//         const validPassword = await bcrypt.compare( password, user.password );
//         if ( !validPassword ){
//             res.status(401).json({ msg: 'Credenciales invalidas.' });
//         }
//         // Generando JWT
//         const token = jwt.sign({ userId: user._id}, key, { expiresIn: '2h' });
//         res.status(201).json({ 
//             msg: 'Usuario autenticado.', 
//             token
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json( { msg: 'Error en el servidor.' } );
//     }
// }

// Crear
exports.create = async( req, res ) => {
    try {
        const { name, email, password } = req.body;
        // Validaciones
        if( !name || !email || !password ){
            res.status(400).json( { msg: 'Se enviaron campos vacios.'});
        } else if (typeof name != 'string'){
            res.status(400).json({ msg: 'El nombre ingresado no es valido.'});
        }
        // Hasheo de la contraseña
        const passHash = await bcrypt.hash( password, salt );
        const newUser = new userModel({
            name: name,
            email: email,
            password: passHash
        });
        // Creando del usuario
        await newUser.save();
        res.status(201).json({
            msg: 'Usuario Guardado.' , 
            id: newUser._id 
        });
    } catch (e) {
        console.log(e);
        res.status(500).json( { msg: 'Error en el servidor.' } );
    }
}

// // Actualizar
// exports.update = async (req, res) => {
//     try {
//         const user = req.body;
//         const { userId } = req.params;
//         // Validaciones
//         if( !user.name || !user.email || !user.password ){
//             res.status(400).json( { msg: 'Se enviaron campos vacios.'});
//         } else if (typeof user.name != 'string'){
//             res.status(400).json({ msg: 'El nombre ingresado no es valido.'});
//         }
//         const filter = { _id: userId };
//         const passHash = await bcrypt.hash( user.password, salt );
//         const data = { 
//             name: user.name,
//             email: user.email,
//             password: passHash,
//         }
//         // Actualizando usuario
//         const result = await userModel.updateOne( filter, data );
//         res.json({
//             msg: 'Usuario actualizado.', 
//             data: result  
//         });
//     } catch (e) {
//         console.log(error);
//         res.json({
//             msg: 'Error en el servidor. '   
//         });
//     }
// }

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

// // Llamar a todos
// exports.call = async (req, res) => {
//     try {
//         // Llamando a los usuarios
//         const users = await userModel.find();
//         if (users){
//             res.json({
//                 msg: 'Lista de usuarios', 
//                 data: users  
//             });
//         } else {
//             res.json({msg: 'No se encontro la informacion.'});
//         }
//     } catch (e) {
//         console.log(e);
//         res.status(500).json( { msg: 'Error en el servidor.' });
//     }
// }

// // Llamar por id
// exports.callById = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         // Llamando al usuario
//         const users = await userModel.findById(userId);
//         if (users){
//             res.json({
//                 msg: 'Usuario', 
//                 data: users  
//             });
//         } else {
//             res.json({msg: 'Usuario no encontrado.'});
//         }
//     } catch (e) {
//         console.log(e);
//         res.status(500).json( { msg: 'Usuario no encontrado.' });
//     }
// }