import { useEffect, useState } from 'react';
import { getCards, getProfile } from '../../api/api';
import FlashcardModal from '../../components/FlashcardModal';
import Flashcard from '../../components/Flashcard';

const Collection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getProfile().then(setUserData).catch(error => {
      console.log("Erro ao buscar o perfil:", error);
    });
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      getCards(selectedLanguage).then(setFlashcards).catch(error => {
        console.log("Erro ao buscar os flashcards:", error);
        setFlashcards([]);
      });
    }
  }, [selectedLanguage]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleCardCreated = () => {
    if (selectedLanguage) {
      getCards(selectedLanguage).then(setFlashcards).catch(error => {
        console.log("Erro ao atualizar os flashcards:", error);
        setFlashcards([]);
      });
    }
  };

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="ml-[310px] px-8 pt-6">
      <h1 className="text-4xl font-comfortaa mb-6 pb-4 text-light-dark dark:text-dark-primary text-center border-b-2 border-dashed border-b-light-highlight ">
        Coleção de {userData.name}
      </h1>
      <section className='flex justify-between'>
        <div>
          <label htmlFor="language-select" className="block text-light-dark dark:text-dark-primary">Escolha um idioma para ver a coleção:</label>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full p-3 border border-gray-300 rounded  mr-6 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value=""></option>
            {userData.languages.map((item) => (
              <option key={item.secondaryLanguage} value={item.secondaryLanguage}>
                {item.secondaryLanguage}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleOpenModal}
          className="mt-4 text-lg  bg-light-accent text-light-background px-6 py-3 rounded-lg hover:bg-light-highlight transition align-baseline"
        >
          Novo Flashcard
        </button>
      </section>

      {isModalOpen && <FlashcardModal onClose={handleCloseModal} onCardCreated={handleCardCreated} />}

      <div className='flex flex-wrap gap-10 p-8'>
        {flashcards.map((item) => <Flashcard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default Collection;
