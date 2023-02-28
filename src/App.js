import { Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Article from './components/pages/Article';
import Movies from './components/pages/Movies';
import Movie from './components/pages/Movie';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <Routes>
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id/:search" element={<Article />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<Movie />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Route>
    </Routes>
  );
}

export default App;
