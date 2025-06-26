import {ReactComponent as Icon} from '../assets_of_project/images/logo.svg';
import sun from '../assets_of_project/images/icon-sun.svg';
import moon from '../assets_of_project/images/icon-moon.svg';
import './Header.modules.css';
import { useTheme } from './ThemeProvider';

const Header = () => {

  const { darkMode, setDarkMode } = useTheme();

  const handleClick = () => { setDarkMode(prevClicked => !prevClicked) } 
 
  return (

    <header className={darkMode ? "light" : ""}>
        <Icon />
        <button onClick={handleClick}>
          <img src={darkMode ? moon : sun} alt="Sun icon" />
        </button>
    </header>
  )
}

export default Header