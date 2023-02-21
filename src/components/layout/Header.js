import MainMenu from '../navigation/MainMenu';
import Logo from './Logo';
import '../../dist/css/header.css';

let primaryMenu = {
  links: [
    {
      id: "m-1",
      link: "Home",
      path: "/"
    },
    {
      id: "m-2",
      link: "News",
      path: "/news"
    },
    {
      id: "m-3",
      link: "Contacts",
      path: "/contacts"
    },
    {
      id: "m-4",
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
