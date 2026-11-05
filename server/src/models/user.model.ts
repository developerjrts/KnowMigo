import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minLength: 8,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      select: false,
    },
    verificationCode: {
      type: String,
      select: false,
    },
    tokenExpires: {
      type: Date,
      select: false,
    },
    codeExpires: {
      type: Date,
      select: false,
    },
    avatar: {
      type: String,
      default: null,
    },
    coverImage: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      maxLength: 500,
      default: "",
      trim: true,
    },
    deteOfBirth: {
      type: String,
      default: null,
    },
    education: {
      institution: {
        type: String,
        default: "",
        trim: true,
      },
      degree: {
        type: String,
        default: "",
        trim: true,
      },
      department: {
        type: String,
        default: "",
        trim: true,
      },
      graduationYear: {
        type: Number,
        default: null,
      },
    },
    location: {
      city: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      country: {
        type: String,
        default: "India",
      },
    },
    skillsOffered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    skillsWanted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    socialLinks: {
      github: {
        type: String,
        default: "",
      },
      linkedIn: {
        type: String,
        default: "",
      },
      instagram: {
        type: String,
        default: "",
      },
      portfolio: {
        type: String,
        default: "",
      },
    },

    stats: {
      sessionCompleted: {
        type: Number,
        default: 0,
        min: 0,
      },
      sessionTaught: {
        type: Number,
        default: 0,
        min: 0,
      },
      sessionLearned: {
        type: Number,
        default: 0,
        min: 0,
      },
      ratingAverage: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      ratingCount: {
        type: Number,
        default: 0,
        min: 0,
      },
    },

    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "public",
    },
    accountStatus: {
      type: String,
      enum: ["active", "suspended", "deactivated"],
      default: "active",
    },
    isActive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
