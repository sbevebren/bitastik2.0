import { Schema, model, models } from "mongoose";
import User from "./userSchema";

const votedBySchema = new Schema({
  email: { type: String },

  vote: {
    type: String,
    enum: ["upvote", "downvote"],
    default: "upvote",
  },
});
const confessionSchema = new Schema(
  {
    content: {
      type: String,
      max: 500,
    },
    email: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
  
    votedBy:{type: [votedBySchema]},
  },
  { timestamps: true }
);

export default models.confession || model("confession", confessionSchema);
