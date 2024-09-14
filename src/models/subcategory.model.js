import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const subcategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        }
    },
    {
        timestamps: true
    }
)

export const SubCategory = mongoose.model("SubCategory", subcategorySchema)