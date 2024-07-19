import { useState } from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import { useAuth } from '../../contexts/AuthContext';
import AnimatedCard from '../../components/AnimatedCard';
import HomeUnlogged from './HomeUnlogged';

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { user } = useAuth();


  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  if (!user) {
    return (
      <div className="ml-[305px] max-w-[1440px] p-4 bg-light-background dark:bg-dark-background overflow-hidden">
        <HomeUnlogged/>
      </div>
    )
  }

  return (
    <div className="ml-[305px] max-w-[1440px] p-4 h-dvh bg-light-background dark:bg-dark-background overflow-hidden">
        <LanguageSelector onSelectLanguage={handleSelectLanguage} />
        {selectedLanguage && <p className="mt-4">Selected Language: {selectedLanguage}</p>}
    </div>
  );
};

export default Home;
