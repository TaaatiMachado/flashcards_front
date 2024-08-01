import { useState } from 'react';
import { createCard, getProfile } from '../../api/api';
import {jwtDecode} from 'jwt-decode';
import languages from '../../api/languages.json';

const NewCard = ({ onClose, onCardCreated }) => {
  const [formData, setFormData] = useState({
    userId: "",
    secondaryLanguage: "",
    primaryWord: "",
    secondaryWord: ""
  });
  const [error, setError] = useState('');
  const token = jwtDecode(localStorage.getItem("Token"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    setError('');
  };

  const cardCreated = () => { 
    console.log('Card criado');
    onCardCreated(); 
    onClose(); 
  };
  
  const cardErr = (response) => {
    if (response.status === 409) {
      setError('O flashcard já existe.');
    } else {
      setError('Erro ao criar flashcard. Tente novamente.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      userId: token.sub,
      secondaryLanguage: formData.secondaryLanguage,
      primaryWord: formData.primaryWord,
      secondaryWord: formData.secondaryWord
    };
    createCard(reqBody, cardCreated, cardErr);
    onClose();
  };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      secondaryLanguage: value
    }));
  };
  
  return (
    <div className="bg-light-background dark:bg-dark-background p-8 w-full max-w-md">
      <h2 className="text-2xl font-comfortaa mb-6 text-light-highlight dark:text-dark-primary">Novo Flashcard</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="language-select" className="block text-dark-background dark:text-dark-primary">Idioma</label>
          <select
            id="language-select"
            name="secondaryLanguage"
            value={formData.secondaryLanguage}
            onChange={handleLanguageChange}
            size="1"
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight dark:bg-dark-background dark:text-light-secondary"
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
        <div className="mb-4">
          <label className="block text-dark-background dark:text-dark-primary">Palavra</label>
          <input
            type="text"
            name="primaryWord"
            value={formData.primaryWord}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight dark:bg-dark-background dark:text-light-secondary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-dark-primary">Tradução</label>
          <input
            type="text"
            name="secondaryWord"
            value={formData.secondaryWord}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-light-highlight dark:bg-dark-background dark:text-light-secondary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-light-accent text-light-background p-4 rounded hover:bg-light-highlight transition"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NewCard;
