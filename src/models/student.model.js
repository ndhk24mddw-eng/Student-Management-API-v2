import mongoose from "mongoose";
const studentSchema= new mongoose.Schema({
     name: String,
    email: String,
    age: Number,
    password : String,
    role : {
        type : String,
        enum : ["student","teacher","admin"],
        default : "student"
    }
});
const Student = mongoose.model("Student", studentSchema);
export default Student;