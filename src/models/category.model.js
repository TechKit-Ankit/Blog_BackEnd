import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const categorySchema = new Schema(
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

export const Category = mongoose.model("Category", categorySchema)