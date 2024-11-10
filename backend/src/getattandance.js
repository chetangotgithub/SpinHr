import model from '../schema/attandance.js';

const getattandance = async (req, res) => {
  const attandance = await model.find({});
  res.status(200).json({ status: 'success', response: attandance });
};

export default getattandance;
