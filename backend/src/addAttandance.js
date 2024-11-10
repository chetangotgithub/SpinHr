import attandancemodel from '../schema/attandance.js';
import usermodel from '../schema/user.js';

const addAttandance = async (req, res) => {
  const userid = req.body.userid;
  const user = await usermodel.findById(userid);
  console.log(user);
  const attandanceData = req.body.attandanceData;
  const attandance = await attandancemodel.findOneAndUpdate(
    { username: user.username }, // Filter by username
    { attandance: attandanceData }, // Update attendance field
    { new: true, upsert: true }
  );
  console.log(attandance);
  res.status(200).json({ status: 'success', response: attandance });
};

export default addAttandance;
