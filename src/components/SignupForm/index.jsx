import { useState } from 'react';
import { signUp } from '../../api/api';
import languages from '../../api/languages.json';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    nativeLanguage: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password' || name === 'confirmPassword') {
      setError('');
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const redirectHome = () => { console.log('Conta criada') };
  const errSignUp = (response) => {
    console.log(JSON.stringify(response.status), JSON.stringify(response.statusText));
    setError('Erro ao criar a conta');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    const reqBody = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      primaryLanguage: formData.nativeLanguage
    };
    signUp(reqBody, redirectHome, errSignUp);
  };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      nativeLanguage: value
    }));
  };

  return (
    <div className="bg-light-background dark:bg-dark-background p-8 rounded-lg shadow-md w-full max-w-md ">
      <h2 className="text-2xl font-comfortaa mb-6 text-light-highlight dark:text-dark-primary">Cadastro</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-dark-background dark:text-dark-primary">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight dark:bg-dark-background dark:text-light-secondary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-dark-background dark:text-dark-primary">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight  dark:bg-dark-background dark:text-light-secondary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-dark-primary">Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight  dark:bg-dark-background dark:text-light-secondary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-dark-primary">Confirmação de Senha</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight  dark:bg-dark-background dark:text-light-secondary"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="language-select" className="block text-gray-700 dark:text-dark-primary">Língua Nativa</label>
          <select
            id="language-select"
            name="nativeLanguage"
            value={formData.nativeLanguage}
            onChange={handleLanguageChange}
            size="1"
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight  dark:bg-dark-background dark:text-light-secondary"
            required
          >
            <option value=""></option>
            {languages.languages.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-light-accent text-light-background p-4 rounded hover:bg-light-highlight transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
