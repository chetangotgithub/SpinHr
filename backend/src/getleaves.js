import model from '../schema/leaves.js';

const getleaves = async (req, res) => {
  const leaves = await model.find({});
  res.status(200).json({ status: 'success', response: leaves });
};

export default getleaves;
