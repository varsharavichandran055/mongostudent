const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    studentName:{type:String},
    studentScrore:{type:Number},
    studentGrade:{type:String},
    studentAddress:{type:String},
    studentPhone:{type:Number},
    studentLocation:{type:String},
    
})

module.exports=mongoose.model('Standup',standupSchema)