import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyAdmin = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")


        if (decoded.role !== 'admin') {
            throw new ApiError(403, 'Access denied, admin only');
        }

        req.user = user; // Attach the decoded user to the request object
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }

})