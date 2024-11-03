import model from '../schema/leaves.js';
const getLeavesbyId = async (req, res) => {
  const id = req.params.id;
  const leave = await model.findById(id);
  res.status(200).json({ status: 'success', response: leave });
};

export default getLeavesbyId;
