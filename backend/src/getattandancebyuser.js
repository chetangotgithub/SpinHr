import usermodel from '../schema/user.js';
import attandancemodel from '../schema/attandance.js';

const getattandancebyuser = async (req, res) => {
  const id = req.params.id;
  const user = await usermodel.findById(id);
  const attandance = await attandancemodel.find({ username: user.username });

  res.status(200).json({ status: 'success', response: attandance });
};

export default getattandancebyuser;
