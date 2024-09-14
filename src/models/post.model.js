import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const postSchema = new Schema(
    {
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        subcategory: {
            type: Schema.Types.ObjectId,
            ref: "SubCategory",
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Post = mongoose.model("Post", postSchema)