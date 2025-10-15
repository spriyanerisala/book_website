import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Book from '../models/Book.js';

// ======================= REGISTER =======================
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // ✅ Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Create and save new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: err.message,
        });
    }
};


// ======================= LOGIN =======================
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // ✅ Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not exist! Please register!",
            });
        }

        // ✅ Compare password
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials",
            });
        }

        // ✅ Determine user role
        let role = "user";

        // Check admin credentials
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            role = "admin";
            user.role = "admin";
            await user.save();
        }

        // ✅ Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, role },
            process.env.JWT_SECRET,{ expiresIn: '7d' }
           
        );

        res.status(200).json({
            success: true,
            message: `${role} successfully logged in`,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role,
            },
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Login failed",
            error: err.message,
        });
    }
};

export const userLikedBooks = async (req,res)=>{
    try{
      const user = await User.findById(req.user._id).populate('likedBooks')
      return res.status(200).json({success:true,likedBooks:user.likedBooks})
    }catch(err){
return   res.status(500).json({ message: err.message });
    }
}

