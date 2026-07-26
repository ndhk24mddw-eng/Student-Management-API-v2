import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/db.js";
console.log(process.env.JWT_SECRET);
const startServer= async ()=>{
try{
         await connectDB();
app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});
} catch(error){
    console.log(error);
}
};
startServer();