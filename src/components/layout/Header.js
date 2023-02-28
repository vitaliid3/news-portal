import MainMenu from '../navigation/MainMenu';
import Logo from './Logo';
import '../../dist/css/header.css';

let primaryMenu = {
  links: [
    {
      link: "Home",
      path: "/"
    },
    {
      link: "News",
      path: "/news"
    },
    {
      link: "Movies",
      path: "/movies"
    },
    {
      link: "Contacts",
      path: "/contacts"
    },
    {
      link: "About",
      path: "/about"
    },
  ]
};
const Header = () => {
  return (
    <header>
      <div className="header-wrapper container">
        < Logo />
        < MainMenu { ...primaryMenu }/>
      </div>
    </header>
  )
}

export default Header;
