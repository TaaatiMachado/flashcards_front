import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username });
    navigate('/');
  };

  return (
    <div className="ml-[305px] max-w-[1440px] p-8 h-dvh py-12 mx-20 flex justify-center items-center flex-col text-dark-background dark:text-light-secondary bg-light-background dark:bg-dark-background overflow-hidden">
      <h1 className="text-2xl">Bem vindo(a)!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col">
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 border rounded"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label>Senha:</label>
          <input type="password" className="p-4 border rounded" />
        </div>
        <button type="submit" className="my-8 mb-20 p-4 text-xl rounded-lg w-[100%] bg-light-accent text-light-background dark:bg-light-accent dark:text-dark-background  hover:bg-light-highlight dark:hover:bg-dark-highlight">Login</button>
      </form>
    </div>
  );
};

export default Login;
