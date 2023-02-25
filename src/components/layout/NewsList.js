import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../dist/css/articles.css';

const baseURL = "https://newsapi.org/v2/everything"
const ApiKey = "fd0c5010162c4488a3638c02cf121734"

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("tesla");

  async function fetchData() {
    axios.get(baseURL, {
      params: {
        q: search,
        apiKey: ApiKey
      } })
        .then(response => {
          setArticles(response.data.articles);
        })
        .catch(error => {
          setError(error.response.data.message);
        })
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleSubmit = e => {
    e.preventDefault()
    fetchData()
  }


  if (error)  {
    return <div className="error">
       <h2>{ error }</h2>
    </div>;
  } else if (articles) {

    const items = articles.map((article, index) =>
        <div key={index} className="article">
          <Link to={"/news/" + index + "/" + search}>More</Link>
          <h1>{index}</h1>
          <img src={article.urlToImage} alt={article.source.name}/>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <div>
            <div>{article.author}</div>
            <div>{article.publishedAt}</div>
          </div>
        </div>
    );
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Serach:
              <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <input type="submit" value="Search" />
          </form>
          <h1>{search}</h1>
          <div className="articles">{ items }</div>
        </div>
    );
  }

}

export default NewsList;
