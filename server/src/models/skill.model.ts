import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 50,
      maxLength: 1000,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    aliases: {
      type: [String],
      default: [],
    },
    icon: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "archived"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    revieweAt: {
      type: Date,
      default: null,
    },
    rejectionReason: {
      type: String,
      default: "",
      maxLength: 500,
    },
  },
  {
    timestamps: true,
  },
);

const skillModel = mongoose.model("Skill", skillSchema);

export default skillModel;
