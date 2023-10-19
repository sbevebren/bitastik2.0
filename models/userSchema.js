import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    max:25,
  },
  note: {
    type: String,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
    max: 50,
  },
  email: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
 
  },
  image: {
    type: String,
 
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  insta: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  github: {
    type: String,
  },
  bio: {
    type: String,
    max: 500,
  },
  branch: {
    type: String,
 },
  yearofgraduation: {
    type: Number,
  },
  hostel: {
    type: Number,
  },
  room: {
    type: Number,
  },
  phone: {
    type: String,
  },
  notes: {
    type: [todoSchema], // Embedding the array of todos using the todoSchema
    default: [],
  },
  birthdate:{
    type:Date,
  }

});

export default models.User || model('User', userSchema);
