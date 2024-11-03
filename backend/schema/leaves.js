import mongoose, { Schema } from 'mongoose';

const leaveSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
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

const leaveModel = mongoose.model('leaves', leaveSchema);

model.exports = leaveModel;
