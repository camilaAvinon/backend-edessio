const express = require('express');
const dataBase = require('./database');
const jwt = require('jsonwebtoken');
const userController = require('./controllers/userController');
const classController = require('./controllers/classController');
const subjectController = require('./controllers/subjectController');
const modalityController = require('./controllers/modalityController');
const professorController = require('./controllers/professorController');
const app = express();
const port = 3000;
// const key =  "blog";

// app.use(express.json());

// Validando el Token
// function validatingToken ( req, res, next ){
//     let token = req.headers.authorization;
//     if( !token ){
//         return res.status(401).json({ msg: 'No se recibio el token.'});
//     }
//     token = token.split(' ')[1];
//     jwt.verify(token, key, (error, decoded) => {
//         if( error ) {
//             console.log(error.JsonWebTokenError);
//             return res.status(403).json( { msg: 'Token invalido.'} );
//         }
//         req.userId = decoded.userId;
//         next();
//     });
// }

// Conexión con la BDD
dataBase.on( 'error', () => {
    console.error('Error de conexion con la base de datos.')
});
dataBase.once( 'open', ()=> {
    console.log('Conexión con la base de datos exitosa.');
});

// // Rutas
// app.get('/', (req, res) => {
//     res.send('<h1>Api Blog</h1>');
// });

// //Ruta autenticación
// app.post('/blog/authentication', userController.auth);


// //Rutas usuarios
// app.get('/blog/users', userController.call);
// app.get('/blog/users/:userId', userController.callById);
// // Rutas protegidas de usuarios
// app.post('/blog/users', validatingToken, userController.create);
// app.put('/blog/users/:userId', validatingToken, userController.update);
// app.delete('/blog/users/:userId', validatingToken, userController.delete);

// //Rutas posteos
// app.get('/blog/posts', postController.call);
// app.get('/blog/posts/:postId', postController.callById);

// // Rutas protegidas de posteos
// app.post('/blog/posts', validatingToken, postController.create);
// app.put('/blog/posts/:postId', validatingToken, postController.update);
// app.delete('/blog/posts/:postId', validatingToken, postController.delete);

// //Rutas comentarios
// app.get('/blog/comments', commentController.call);
// app.get('/blog/comments/:commentId', commentController.callById);

// // Rutas protegidas de comentarios
// app.post('/blog/comments', validatingToken, commentController.create);
// app.put('/blog/comments/:commentId', validatingToken, commentController.update);
// app.delete('/blog/comments/:commentId', validatingToken, commentController.delete);

// //Rutas categorias
// app.get('/blog/categories', categoryController.call);
// app.get('/blog/categories/:categoryId', categoryController.callById);

// // Rutas protegidas de categorias
// app.post('/blog/categories', validatingToken, categoryController.create);
// app.put('/blog/categories/:categoryId', validatingToken, categoryController.update);
// app.delete('/blog/categories/:categoryId', validatingToken, categoryController.delete);

app.listen( port, () => {
    console.log('Servidor en el puerto: ', port);
});