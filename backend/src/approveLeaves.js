import model from '../schema/leaves.js';

const approveLeave = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await model.findByIdAndUpdate(
      id,
      { status: 'Approved', updatedAt: Date.now() },
      { new: true } // Return the updated document
    );

    res.status(200).json({ status: 'success', response: updatedUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export default approveLeave;
