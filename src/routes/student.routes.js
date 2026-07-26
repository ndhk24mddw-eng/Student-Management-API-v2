import express from "express";
import {auth} from "../middleware/auth.middleware.js";
const router=express.Router();
// importig controller
import {getAllStudents,
    postStudents,
    getStudentById,
    updateStudent,
    deleteStudent 

} from "../controllers/student.controller.js";


router.get("/",auth,getAllStudents);
router.post("/",auth,postStudents);
router.get("/:id",auth,getStudentById );
router.put("/:id",auth,updateStudent);
router.delete("/:id",auth,deleteStudent)

export default router;

