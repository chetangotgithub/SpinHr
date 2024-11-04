import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import getAllUsers from './src/getAllUsers.js';
import addUser from './src/addUser.js';
import getUserById from './src/getUserById.js';
import loginValidation from './src/loginValidation.js';
import addLeaves from './src/addLeaves.js';
import approveLeave from './src/approveLeaves.js';
import getleaves from './src/getleaves.js';
import getLeavesbyId from './src/getLeavesbyId.js';
import approveUser from './src/approveUser.js';
import decodeToken from './src/decodeToken.js';
import editLeaves from './src/editleaves.js';
import getLeavesByUser from './src/getleavesbuUser.js';

const app = express();
const router = express.Router();

app.use(cors());

dotenv.config();
var jsonParser = bodyParser.json();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const saltRounds = 2;

app.get('/users', (req, res) => getAllUsers(req, res));
app.post('/', jsonParser, (req, res) => addUser(req, res));
app.get('/users/:id', (req, res) => getUserById(req, res));
app.post('/login', jsonParser, (req, res) => loginValidation(req, res));

app.post('/approve/:id', jsonParser, (req, res) => approveUser(req, res));

app.post('/leaves/add', jsonParser, (req, res) => decodeToken(req, res));
app.get('/leaves/:id', jsonParser, (req, res) => getLeavesbyId(req, res));
app.post('/leaves/:id', jsonParser, (req, res) => addLeaves(req, res));
app.put('/leaves/approve/:id', jsonParser, (req, res) =>
  approveLeave(req, res)
);
app.put('/leaves/edit/:id', jsonParser, (req, res) => editLeaves(req, res));
app.get('/leaves/user/:id', (req, res) => getLeavesByUser(req, res));

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((error) => {
    console.log('Connection Failed due to ', error.message);
  });

app.listen(PORT || 3000, () => {
  console.log(`Listening to PORT ${PORT}`);
});
