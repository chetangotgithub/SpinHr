import leavesmodel from '../schema/leaves.js';
import usersmodel from '../schema/user.js';

const addLeaves = async (req, res) => {
  try {
    const info = req.body;
    const id = req.params.id;

    const user = await usersmodel.findById(id);

    const newLeave = new leavesmodel({
      username: user.username,
      reason: info.reason,
      startDate: info.startDate,
      endDate: info.endDate,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const leave = await newLeave.save();
    res.status(200).json({ status: 'success', response: leave });
  } catch (error) {
    res.status(400).json({ status: 'failure', response: error.message });
  }
};

export default addLeaves;
