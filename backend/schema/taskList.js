import mongoose, { Schema } from 'mongoose';
const taskSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  timeRemaining: {
    typr: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const projectSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  tasklist: [taskSchema],
});

const projectModel = mongoose.model('tasklist', projectSchema);

model.exports = projectModel;
