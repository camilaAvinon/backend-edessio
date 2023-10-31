const classModel = require('../models/classModel');

// // Crear
// exports.create = async(req, res) => {
//     try {
//         // Validaciones
//         const { title, body, userId, categoryId } = new postModel( req.body );
//         if ( !title || !body || !userId || !categoryId ){
//             res.status(400).json({msg: 'Se enviaron campos vacios.'});
//         } else if (typeof title != 'string'){
//             res.status(400).json({msg: 'El titulo ingresado no es valido.'});
//         } else if (typeof body != 'string'){
//             res.status(400).json({msg: 'El cuerpo del posteo ingresado no es valido.'});
//         } else if (typeof userId != 'string' || userId.lenght <12){
//             res.status(400).json({msg: 'El ID de usuario no es valido.'});
//         } else if (typeof categoryId != 'string' || categoryId.lenght <12){
//             res.status(400).json({msg: 'El ID de la categoria no es valido.'});
//         }
//         const newPost = new postModel({
//             title: title,
//             body: body,
//             userd: userId,
//             categoryId: categoryId
//         });
//         // Creando del posteo
//         await newPost.save();
//         res.status(201).json({
//             msg: 'Posteo creado.',
//             data: newPost._id
//         });
//     } catch (e) {
//         console.error(e);
//         res.status(500).json({
//             msg: 'Error del servidor.'
//         });
//     }
// }

// // Actualizar → Verificar si funciona
// exports.update = async(req, res) => {
//     try {
//         const post = req.body;
//         const { postId } = req.params;
//         // Validaciones
//         if ( !post.title || !post.body || !post.userId || !post.categoryId ){
//             res.status(400).json( { msg: 'Se enviaron campos vacios'});
//         } else if (typeof post.title != 'string'){
//             res.status(400).json({msg: 'El titulo ingresado no es valido.'});
//         } else if (typeof post.body != 'string'){
//             res.status(400).json({msg: 'El cuerpo del posteo ingresado no es valido.'});
//         } else if (typeof post.userId != 'string' || post.userId.lenght <12){
//             res.status(400).json({msg: 'El ID de usuario no es valido.'});
//         } else if (typeof post.categoryId != 'string' || post.categoryId.lenght <12){
//             res.status(400).json({msg: 'El ID de la categoria no es valido.'});
//         }
//         const filter = { _id: postId };
//         const data = {
//             title: post.title,
//             body: post.body,
//             userId: post.userId,
//             categoryId: post.categoryId,
//         }
//         // Actualizando posteo
//         const result = await postModel.updateOne(filter, data);
//         res.json({
//             msg: 'Posteo actualizado.',
//             data: result
//         })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             msg: 'Error del servidor.'
//         })
//     }
// }

// // Eliminar
// exports.delete = async (req, res) => {
//     try {
//         const { postId } = req.params;
//         const filter = { _id: postId };
//         // Eliminando posteo
//         const result = await postModel.deleteOne(filter);
//         res.json({
//             msg: 'Posteo eliminado.', 
//             data: result  
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json( { msg: 'Error en el servidor.' });
//     }
// }

// // Llamar a todos
// exports.call = async (req, res) => {
//     try {
//         // Llamando posteos
//         const posts = await postModel.find();
//         if (posts){
//             res.json({
//                 msg: 'Lista de posteos', 
//                 data: posts  
//             });
//         } else {
//             res.json({msg: 'No se encontró la información.'});
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json( { msg: 'Error en el servidor.' });
//     }
// }

// // Llamar por id
// exports.callById = async (req, res) => {
//     try {
//         const { postId } = req.params;
//         // Llamando posteo
//         const posts = await postModel.findById(postId);
//         if (posts){
//             res.json({
//                 msg: 'Posteo', 
//                 data: posts  
//             });
//         }  else {
//             res.status.json({msg: 'Posteo no encontrado.'});
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json( { msg: 'Error en el servidor.' });
//     }
// }