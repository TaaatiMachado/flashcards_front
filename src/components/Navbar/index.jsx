import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import logo from '../../assets/card.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'


const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-128 h-full p-4 fixed top-0 left-0 bg-light-secondary text-light-dark dark:bg-dark-secondary dark:text-dark-primary">
      <Link to='/'>
        <div className='flex items-center gap-2'>
          <img src={logo} className='w-20' />
          <h2 className="text-4xl font-comfortaa">Flashcards</h2>
        </div>
      </Link>
      <ul className='m-5'>
        {!user && <><li><Link to="/login" className="block py-2 hover:text-light-highlight dark:hover:text-dark-highlight">Login</Link></li>
          <li><Link to="/signup" className="block py-2 hover:text-light-highlight dark:hover:text-dark-highlight">Cadastre-se</Link></li></>}
        {user && <><li><Link to="/profile" className="block py-2 hover:text-light-highlight dark:hover:text-dark-highlight">Perfil</Link></li>
          <li><Link to="/training" className="block py-2 hover:text-light-highlight dark:hover:text-dark-highlight">Treinar</Link></li>
          <li><Link to="/collection" className="block py-2 hover:text-light-highlight dark:hover:text-dark-highlight">Coleção</Link></li>
          <li><button onClick={logout} className="block py-2 hover:text-light-highlight dark:hover:text-dark-highlight">Logout</button></li></>}
      </ul>
      <button
        onClick={toggleTheme}
        className="mt-4 p-2 absolute bottom-5 shadow-md bg-light-dark text-light-background rounded dark:bg-dark-accent dark:text-dark-background  hover:bg-light-highlight dark:hover:bg-dark-highlight"
      >
        <img src={theme === 'light' ? moon : sun} className='w-7 ' />
      </button>
    </nav>
  );
};

export default Navbar;
