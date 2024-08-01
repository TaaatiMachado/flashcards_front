import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Collection from './pages/Collection';
import Training from './pages/Training';

const App = () => {

  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/collection" element={<Collection />} /> 
          <Route path="/training" element={<Training />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
