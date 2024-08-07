import star from '../../assets/star.png';
import { getProfile } from '../../api/api';
import { useEffect, useState } from 'react';

const HomeLogged = () => {
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    getProfile().then(setUserData).catch(error => {
      console.error("Erro ao buscar o perfil:", error);
    });
  }, []);

  if (!userData) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="px-8 pt-6 flex justify-between h-[90vh] text-light-dark dark:text-light-background">
      <div>
        <h1 className="text-4xl font-comfortaa mb-6 text-light-dark dark:text-dark-primary">Bem-vindo, {userData.name}.</h1>
        <h2 className='text-2xl mb-6 text-light-dark dark:text-dark-primary'>O que vamos fazer hoje?</h2>
        <p>Você pode:</p>
        <ul>
          <li>Começar uma nova coleção</li>
          <li>Adicionar novos flashcards a uma coleção já existente</li>
          <li>Progredir nos treinamentos</li>
          <li>Gerenciar seus cards</li>
        </ul>
        <div className='w-full border-2 border-light-accent border-dashed my-4 p-5 relative bottom-0'>
        </div>
      </div>
      <div className='flex flex-col justify-between opacity-35'>
        <img src={star} className="rotate-[12deg] w-24" />
        <img src={star} className='rotate-[-38deg] w-24' />
        <img src={star} className='rotate-[-10deg] w-24' />
      </div>
    </div>
  );
};

export default HomeLogged;
