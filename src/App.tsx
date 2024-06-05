import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import History from './components/History/History';
import SignUp from './components/SignUp/SignUp';
import ProtectedRoute from './components/authentication/protectedRoute';
import { AuthProvider } from './components/authentication/authContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<ProtectedRoute element={<Home/>} />} />
          <Route path="/history" element={<ProtectedRoute element={<History/>} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
