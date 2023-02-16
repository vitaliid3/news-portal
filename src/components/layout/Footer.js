import { Link } from "react-router-dom";
import "../../dist/css/footer.css";
import NavWithTitle from "../navigation/NavWithTitle";

const currentYear = new Date().getFullYear();
let primaryNav = {
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
    {
      link: "FAQ",
      path: "/faq"
    },
    {
      link: "Privacy & Policy",
      path: "/privacy-and-policy"
    },
  ]
};
let socialNav = {
  title:  "Social Media",
  links: [
    {
      link: "Instagram",
      path: "https://www.instagram.com"
    },
    {
      link: "Twitter",
      path: "https://twitter.com"
    },
    {
      link: "FaceBook",
      path: "https://www.facebook.com"
    },
    {
      link: "YouTube",
      path: "https://www.youtube.com"
    },
  ]
};

const Footer = () => {
  return (
      <footer>
        <div className="content container">
          <div className="text-area">
            <h3>News Portal</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  It was popularised in the 1960s with the release of Letraset sheets containing.
            </p>
          </div>
          <NavWithTitle { ...primaryNav } />
          <NavWithTitle { ...socialNav } />
        </div>
        <div className="copyright">
          <p className="container">
            Copyright © { currentYear } Bloggar by <Link href="/">News Portal.</Link> All Rights Reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer;
