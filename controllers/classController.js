const classModel = require('../models/classModel');

// Create
exports.create = async (req, res) => {
    try{
        // date, studentId, professorId, modalityId, subjectId
        if(!date||!studentId||!professorId||!modalityId||!subjectId){
            res.json({msg:'There are empty fields.'});
        } else if(typeof(date)!=Date){
            res.json({msg:'Date is not valid.'});
        } else if (studentId.length<12){
            res.json({msg:'StudentId is not valid.'});
        } else if (professorId.length<12){
            res.json({msg:'ProfessorId is not valid.'});
        } else if (modalityId.length<12){
            res.json({msg:'ModalityId is not valid.'});
        } else if (subjectId.length<12){
            res.json({msg:'SubjectId is not valid.'});
        }
        const newClass = new classModel({
            date: date,
            studentId: studentId,
            professorId: professorId,
            modalityId: modalityId,
            subjectId: subjectId
        });
        await newClass.save();
        res.status(201).json({
            msg:'Class created.',
            id: newClass._id
        })
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Update
exports.update = async (req, res) => {
    try{
        const classes = req.body;
        const {classId} = req.params;
        // Hay que ver quienes la podrian modificar, para i el profesor. Pueden modificar fecha, alumnos, materia
        if(!classes.date||!classes.studentId||!classes.subjectId||!classes.modalityId){
            res.status(400).json( { msg: 'There are empty fields.'});
        }else if(typeof(date)!=Date){
            res.status(400).json({ msg: 'Date is not valid.'});
        }
        const filter = {_id: classId};
        const data = {
            date: classes.date,
            studentId: classes.studentId,
            subjectId: classes.subjectId,
            modalityId: classes.modalityId
        }
        const result = await classModel.updateOne(filter, data);
        res.json({
            msg:'Class updated.',
            data: result
        });
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error'});
    }
}

// ELiminar - Desactivar

// Call
exports.call = async (req, res) => {
    try{
        const classes = await classModel.find();
        if(classes){
            res.json({
                msg:'Classes',
                data:classes
            });
        }else{
            res.json({msg:'Not found.'});
        }
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Call by id
exports.callById = async (req, res) => {
    try{
        const {classId} = req.params;
        const classes = await classModel.findById(classId);
        if(classes){
            res.json({
                msg:'Class:',
                data: classes
            });
        }else{
            res.json({msg:'Not found.'});
        }
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error.'});
    }
}

// Call by professor
// Call by subject
// Call by date