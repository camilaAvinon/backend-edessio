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
exports.update = (req, res) => {
    try{
        const class = req.body;
    }catch(e){
        console.error(e);
        res.status(500).json({msg:'Server error'});
    }
}
