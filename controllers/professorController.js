// Falta el eliminar
const professorModel = require('../models/professorModel');
const userModel = require('../models/userModel');
const roleModel = require('../models/roleModel');

// Create
// exports.create = async (req, res) => {
//     try{
//         const {userId, subjects, modalityId} = req.body;
//         if (!userId||!subjects||!modalityId){
//             res.status(400).json({msg:'There are empty fields.'});
//         } else if (typeof userId != 'string' || userId.length<12){
//             res.status(400).json({ msg:'UserId is not valid.'});
//         } else if (subjects.empty()){ //ver como seria eso
//             res.status(400).json({ msg:'Subjects are not valid.'});
//         }
//         const newProfessor = new professorModel({
//             userId: userId,
//             subjects: subjects,
//             modalityId: modalityId
//         });
//         await newProfessor.save();
//         // res.status(201).json({msg:'Professor created.'});
//     }catch(e){
//         console.error(e);
//         res.status(500).json({msg:'Server error'});
//     }
// }

// Update
// exports.update = async (req, res) =>{
//     try{
//         const professor = req.body;
//         const {professorId} = req.params;
//         if (!professor.subjects||!professor.modalityId){
//             res.status(400).json({msg:'There are empty fields.'});
//         }
//         const filter = {_id:professorId};
//         const data = {
//             subjects: professor.subjects,
//             modality: professor.modalityId
//         }
//         const result = await professorModel.updateOne(filter, data);
//         res.json({
//             msg:'Professor updated.',
//             data: result
//         });
//     }catch(e){
//         console.error(e);
//         res.status(500).json({msg:'Server error.'});
//     }
// }

// Call
exports.call = async (req, res) => {
    try{
        const professors = await professorModel.find().populate('userId').populate('subjectsId');
        if (professors){
            res.json({
                msg:'Professors',
                data: professors
            });
        }else{
            res.json({msg:'Not found.'});
        }
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}
// exports.call = async (req, res) => {
//     try{
//         const role = await roleModel.find({name: 'Professor'});
//         const roleId = role[0]._id;
//         //console.log(role);
//         const users = await userModel.find({ role: roleId});

//         console.log('Prosesores ', users);

//         const professors = await professorModel.find().populate('User');


//         //const users = await userModel.find({_id: profe.userId});
//         const listProfessors = users


// /*         professors.forEach(  async (profe) => {
//            // console.log(profe.userId);    
//             const user = await userModel.findById({_id: profe.userId});
//             if( user){
//                 console.log("usuario", user);
//                 listProfessors.push(user)
//             }
//         }); */
//                 // professors.forEach(professor  => {
//         //     professorsIds.push(professor._id);
//         // });

 
//         if (professors){
//             res.json({
//                 msg:'Professors',
//                 data: professors
//             });
//         }else{
//             res.json({msg:'Not found.'});
//         }
//     }catch(e){
//         console.error(e);
//         res.status(500).json({msg:'Server error.'});
//     }
// }

// Call by id
exports.callById = async (req, res) => {
    try {
        const {professorId} = req.params;
        const professor = await professorModel.findById(professorId);
        if (professor){
            res.json({
                msg: 'Professor:',
                data: professor
            });
        }else{
            res.json({msg:'Not found.'});
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Call by subject
exports.callBySubject = async(req, res) => {
    try{
        const {subjectId} = req.params;
        const professor = await professorsModel.find({subjectId:subjectId});
        if (professor){
            res.json({
                msg:'Professor:',
                data: professor
            })
        }else{
            res.json({msg:'Not found.'})
        }
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'})
    }
}