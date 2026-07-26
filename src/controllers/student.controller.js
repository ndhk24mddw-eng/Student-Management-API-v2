 import Student from "../models/student.model.js";
 import bcrypt from "bcrypt";
 
 // get student
 export const getAllStudents = async (req,res)=>{
  const students =  await Student.find();
  res.json(students);
}





// Signup
export const postStudents = async (req, res) => {
    try {

        const student = req.body;

        // Hash the plain password before saving
        const hashedPassword = await bcrypt.hash(student.password, 10);

        // Replace plain password with hashed password
        student.password = hashedPassword;

        // Save student to MongoDB
        const savedStudent = await Student.create(student);

        // Return created student
        res.json(savedStudent);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
          message : "Internal server error"
        })
    }
};








// get student by id
export const getStudentById = async (req, res) => {
  try {
    const id = req.params.id;

    const foundStudent = await Student.findById(id);

    if (!foundStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    return res.status(200).json(foundStudent);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// updatestudent

export const updateStudent =async (req,res)=>{
 try {
      const id = req.params.id;
  const body =req.body;
  const updatedStudent = await Student.findByIdAndUpdate(id,body,{
    new : true
  });
  if(!updatedStudent){
    return res.status(404).json({
      "message" : "Not fuund"
    });
  };
  return res.status(200).json(updatedStudent);

  
  } catch (error){
   return res.status(500).json({
    message: "Internal Server Error"
});
  }


};


// delete student

export  const deleteStudent = async (req,res)=>{
 try{
  const id=req.params.id;
  const deletedStudent = await Student.findByIdAndDelete(id);
  if(!deletedStudent){
    return res.status(404).json({
      "message" : " student not found"
    })
  }
  return res.status(200).json(deletedStudent);

 } catch (error){
  return res.status(500).json({
    "message" : "internal server"
  })
 }
    
}