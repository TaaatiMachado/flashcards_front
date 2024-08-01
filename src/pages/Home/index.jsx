import { useAuth } from '../../contexts/AuthContext';
import HomeUnlogged from './HomeUnlogged';
import HomeLogged from './HomeLogged';

const Home = () => {
  const { user } = useAuth();


  if (!user) {
    return (
      <div className="ml-[305px] max-w-[1440px] p-4 bg-light-background dark:bg-dark-background overflow-hidden">
        <HomeUnlogged/>
      </div>
    )
  }

  return (
    <div className="ml-[305px] max-w-[1440px] p-4 h-dvh bg-light-background dark:bg-dark-background">
        <HomeLogged/>
    </div>
  );
};

export default Home;
