import AnimatedCard from "../../components/AnimatedCard";
import { Link } from 'react-router-dom';

const HomeUnlogged = () => {
  return (

    <div className="h-full">
      <div className="flex justify-center items-center h-dvh">
        <div className=" max-w-2xl text-dark-background dark:text-light-secondary text-center">
          <h1 className="text-5xl mb-4 mx-20 mt-20 font-comfortaa text-left">O melhor jeito de praticar!</h1>
          <p className="text-left mx-20 ">Memorize e revise de forma eficiente com flashcards. Uma metodologia de estudo que é perfeita para organizar e simplificar o processo de aprendizado, ajudando você a focar no que realmente importa. Com revisões rápidas e frequentes, você solidifica o conhecimento e se prepara melhor para qualquer desafio.</p>
          <Link to="/signup" className="my-8 mb-20 p-4 text-xl inline-block rounded-lg min-w-80 shadow-md bg-light-accent text-light-background dark:bg-light-accent dark:text-dark-background  hover:bg-light-highlight dark:hover:bg-dark-highlight"> Comece agora! </Link>

          <div className="w-screen text-left mx-20 text-dark-background dark:text-light-secondary">
            <h1 className="text-2xl font-comfortaa ">Benefícios</h1>
            <ul className="mt-6 max-w-2xl space-y-4">
              <li >
                <strong>Melhora na Retenção de Informações:</strong> Estudos mostram que revisar informações de forma espaçada ajuda a consolidar o conhecimento.
              </li>
              <li >
                <strong>Flexibilidade:</strong> Você pode estudar em qualquer lugar, a qualquer hora, usando flashcards digitais no seu celular, tablet ou computador.
              </li>
              <li >
                <strong>Personalização:</strong> Crie seus próprios flashcards com base no seu material de estudo e ajuste conforme necessário.
              </li>
            </ul>
          </div>
        </div>
        <AnimatedCard />

      </div>
      <div className="py-12 mx-20 mt-10 text-dark-background dark:text-light-secondary">
        <h2 className="text-2xl font-comfortaa">O Que Nossos Usuários Dizem</h2>
        <div className="mt-6 mx-auto space-y-6">
          <blockquote className="inline-block max-w-xs h-44 p-4 mr-5 align-bottom border-light-primary border-4 rounded-lg shadow-md">
            <p>"Os flashcards me ajudaram a passar nas provas de maneira mais tranquila. Recomendo a todos!"</p>
            <cite className="block mt-2 text-right">- Maria S.</cite>
          </blockquote> 
          <blockquote className="inline-block max-w-xs h-44 p-4 mr-5 align-bottom border-light-primary border-4 rounded-lg shadow-md">
            <p>"Nunca pensei que algo tão simples pudesse ser tão eficaz. Estudar com flashcards mudou a minha vida acadêmica."</p>
            <cite className="block mt-2 text-right ">- João P.</cite>
          </blockquote>
          <blockquote className="inline-block max-w-xs h-44 p-4 mr-5 align-bottom border-light-primary border-4 rounded-lg shadow-md">
            <p>"Nunca pensei que algo tão simples pudesse ser tão eficaz. Estudar com flashcards mudou a minha vida acadêmica."</p>
            <cite className="block mt-2 text-right ">- João P.</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HomeUnlogged;