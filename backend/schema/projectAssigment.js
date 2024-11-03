import mongoose, { Schema } from 'mongoose';

const assigmentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  projectname: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
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

const assignmentModel = mongoose.model('projects', assigmentSchema);
model.exports = assignmentModel;
