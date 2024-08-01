import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const successLogin = (token) => {
    //console.log(token)
    login({ username, token });
    navigate('/')
  }

  const failLogin = (response) => {
    console.log( 'Erro no login', response)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const reqBody = {
      email: username,
      password: password,
    }

    userLogin(reqBody, successLogin, failLogin)
    
    //
  };

  return (
    <div className="ml-[305px] max-w-[1440px] p-8 h-dvh py-12 mx-20 flex justify-center items-center flex-col text-dark-background dark:text-light-secondary bg-light-background dark:bg-dark-background overflow-hidden">
      <h1 className="text-2xl font-comfortaa text-light-primary">Bem vindo(a)!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col">
          <label className="block text-dark-background dark:text-dark-primary">Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 border rounded focus:outline-none focus:ring-2 focus:ring-light-highlight dark:bg-dark-background dark:text-light-secondary"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label className="block text-dark-background dark:text-dark-primary">Senha:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="p-4 border rounded focus:outline-none focus:ring-2 focus:ring-light-highlight dark:bg-dark-background dark:text-light-secondary" />
        </div>
        <button type="submit" className="my-8 mb-20 p-4 text-xl rounded-lg w-[100%] bg-light-accent text-light-background dark:bg-light-accent dark:text-dark-background  hover:bg-light-highlight dark:hover:bg-dark-highlight transition">
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;
