import jwt from 'jsonwebtoken';

const decodeToken = async (req, res) => {
  const token = req.body.accessToken;
  console.log('token ' + token);

  try {
    const decode = jwt.verify(token, process.env.TOKEN_SECRET); // No `await` needed
    console.log(decode);

    res.status(200).json({ status: 'success', response: decode });
  } catch (error) {
    console.error('Token verification failed:', error);

    res.status(401).json({ status: 'failure', response: 'Invalid token' });
  }
};

export default decodeToken;
