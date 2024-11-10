import moongoose, { Schema } from 'mongoose';
import { type } from 'os';

const attandanceSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  attandance: {
    type: [
      {
        date: {
          type: Date,
          required: true,
        },
        day: {
          type: String,
          required: true,
        },
        isPresent: {
          type: String,
        },
      },
    ],
    default: [],
  },
});

const model = moongoose.model('attandance', attandanceSchema);

export default model;
