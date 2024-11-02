import Login from './components/Login';
import Home from './components/Home';
import Users from './components/Users';
import Signup from './components/Signup';
import User from './components/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/users/:id" element={<User />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
