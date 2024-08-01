import { useEffect, useState } from 'react';
import { getCards } from '../../api/api';
import FlashcardModal from '../../components/FlashcardModal';
import { jwtDecode } from 'jwt-decode';
import Flashcard from '../../components/Flashcard';

const Collection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const token = jwtDecode(localStorage.getItem("Token"));
  const userData = JSON.parse(atob(token.userData))
  //console.log(userData)
  
  useEffect(() => {
    if (selectedLanguage) {
      getCards(selectedLanguage).then(setFlashcards);
    }
  }, [selectedLanguage, isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="ml-[310px] px-8 pt-6">
      <h1 className="text-4xl font-comfortaa mb-6 pb-4 text-light-dark dark:text-dark-primary text-center border-b-2 border-dashed border-b-light-highlight ">Coleção de {userData.name}</h1>
      <section>
              
      <div >
      <label htmlFor="language-select" className="block text-light-dark dark:text-dark-primary">Escolha um idioma para ver a coleção:</label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="w-[35%] p-3 border border-gray-300 rounded  mr-6 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value=""></option>
          {userData.languages.map((item, index) => <option key={index+1} value={item.secondaryLanguage}> {item.secondaryLanguage}</option>)}
        </select>
      </div>

      <button
        onClick={handleOpenModal}
        className="mt-4 text-lg  bg-light-accent text-light-background px-6 py-3 rounded-lg hover:bg-light-highlight transition align-baseline">
        Novo Flashcard
      </button>


      </section>

      
      {isModalOpen && <FlashcardModal onClose={handleCloseModal} />}

      <div className='flex flex-wrap gap-10 p-8'>
      {flashcards.map((item, index) => <Flashcard key={index+1} item={item}/> )}
      </div>
      

    </div>
  );
}

export default Collection