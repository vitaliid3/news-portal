import { Link } from 'react-router-dom';
import '../../dist/css/footer.css';
import NavWithTitle from '../navigation/NavWithTitle';

const currentYear = new Date().getFullYear();

let primaryNav = {
  title:  "News Portal",
  links: [
    { id: "news-1",
      link: "Home",
      path: "/"
    },
    {
      id: "news-2",
      link: "News",
      path: "/news"
    },
    {
      id: "news-3",
      link: "Home",
      path: "/"
    },
    {
      id: "news-4",
      link: "Contacts",
      path: "/contacts"
    },
    {
      id: "news-5",
      link: "About",
      path: "/about"
    },
    {
      id: "news-6",
      link: "FAQ",
      path: "/faq"
    },
    {
      id: "news-7",
      link: "Privacy & Policy",
      path: "/privacy-and-policy"
    },
  ]
};
let socialNav = {
  title:  "Social Media",
  links: [
    {
      id: "social-1",
      link: "Instagram",
      path: "https://www.instagram.com"
    },
    {
      id: "social-2",
      link: "Twitter",
      path: "https://twitter.com"
    },
    {
      id: "social-3",
      link: "FaceBook",
      path: "https://www.facebook.com"
    },
    {
      id: "social-4",
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
            Copyright © { currentYear } Bloggar by <Link to="/">News Portal.</Link> All Rights Reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer;
