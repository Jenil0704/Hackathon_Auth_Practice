import { verifyToken } from "../utils/helper.js";
import { findUserById } from "../microservices/user.dao.js";

export const authenticateToken = async (req, res, next) => {
    try {
        // Get token from cookies
        const token = req.cookies.accessToken;
        
        if (!token) {
            return res.status(401).json({ message: "Access token required" });
        }

        // Verify the token
        const userId = verifyToken(token);
        
        // Find user by ID
        const user = await findUserById(userId);
        
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Set user in request object
        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
