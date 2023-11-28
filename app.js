const express = require('express');
const cors = require('cors')
const dataBase = require('./database');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const classController = require('./controllers/classController');
const subjectController = require('./controllers/subjectController');
const modalityController = require('./controllers/modalityController');
const professorController = require('./controllers/professorController');
const roleController = require('./controllers/roleController');
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use(cors());

const port = 2026;
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
    console.error('Failed at connecting with the database.')
});
dataBase.once( 'open', ()=> {
    console.log('Database connection successful.');
});

// Rutas
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a Edessio</h1>');
});

// //Ruta autenticación
// app.post('/blog/authentication', userController.auth);


// Users
app.get('/edessio/users', userController.call);
app.get('/edessio/users/:userId', userController.callById);
app.post('/edessio/users', userController.create);
app.put('/edessio/users/:userId', userController.update);

// Classes
app.get('/edessio/classes', classController.call);
app.get('/edessio/classes/:classId', classController.callById);
app.post('/edessio/classes', classController.create);
app.put('/edessio/classes/:classId', classController.update);

// Modalities
app.get('/edessio/modalities', modalityController.call);
app.get('/edessio/modalities/:modalityId', modalityController.callById);

// Subjects
app.get('/edessio/subjects', subjectController.call);
app.get('/edessio/subjects/:subjectId', subjectController.callById);

// Roles
app.get('/edessio/roles', roleController.call);
app.get('/edessio/roles/:roleId', roleController.callById);

app.get('/edessio/professors', professorController.call);


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