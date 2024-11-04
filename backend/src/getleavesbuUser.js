import userModel from '../schema/user.js';
import leaveModel from '../schema/leaves.js';

const getLeavesByUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the user by ID
    const user = await userModel.findById(id);

    if (user) {
      // Find leaves by user's username
      const leaves = await leaveModel.find({ username: user.username });

      // Send leaves in response
      res.status(200).json(leaves);
    } else {
      // User not found
      res.status(400).json({ status: 'failure', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching leaves by user:', error);
    res.status(500).json({ status: 'failure', message: 'Server error' });
  }
};

export default getLeavesByUser;
