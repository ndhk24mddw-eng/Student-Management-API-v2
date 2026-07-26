import Student from "../models/student.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    try {

        // Read email and password sent by the client
        const { email, password } = req.body;

        // Find user by email in MongoDB
        const foundUser = await Student.findOne({ email });

        // If user doesn't exist, stop the request
        if (!foundUser) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        // Compare plain password with hashed password stored in DB
        const isMatch = await bcrypt.compare(
            password,
            foundUser.password
        );

        // If password is incorrect, stop the request
        if (!isMatch) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        // Generate JWT token after successful authentication
        const token = jwt.sign(
            {
                // Store minimum information inside JWT
                id: foundUser._id,
                role: foundUser.role
            },
            // Secret key used to digitally sign the token
            process.env.JWT_SECRET,
            {
                // Token will expire after 1 day
                expiresIn: "1d"
            }
        );

        // Send JWT token to the client
        return res.status(200).json({
            token
        });

    } catch (error) {

        // Handle unexpected server errors
        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
};