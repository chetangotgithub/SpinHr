import model from '../schema/user.js';

const approveUser = async (req, res) => {
  const id = req.params.id;
  const user = await model.findByIdAndUpdate(
    id,
    { status: 'Approved', updatedAt: Date.now() },
    { new: true }
  );
  res.status(200).json({ status: 'success', response: user });
};

export default approveUser;
