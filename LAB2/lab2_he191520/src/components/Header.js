import { useTheme } from '../context/ThemContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>Mini Movie Manager</h1>
      <button type="button" onClick={toggleTheme} className="theme-btn">
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};

export default Header;