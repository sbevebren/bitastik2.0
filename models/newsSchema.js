import { Schema, model, models } from 'mongoose';

const newsSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
 
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

}, { timestamps: true });
export default models.News || model('News', newsSchema);

