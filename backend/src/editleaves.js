import model from '../schema/leaves.js';

const editLeaves = async (req, res) => {
  const info = req.body;
  const id = req.params.id;

  try {
    const updatedUser = await model.findByIdAndUpdate(
      id,
      {
        reason: info.reason,
        startDate: info.startDate,
        endDate: info.endDate,
        updatedAt: Date.now(),
      },
      { new: true } // Return the updated document
    );

    res.status(200).json({ status: 'success', response: updatedUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export default editLeaves;
