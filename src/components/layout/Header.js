import "../../dist/css/header.css";
import MainMenu from "../navigation/MainMenu";
import Logo from "./Logo";

let primaryMenu = {
  title:  "News Portal",
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
