import { useEffect, useState } from "react";
import axios from "axios";

//const baseURL = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-21&sortBy=publishedAt&apiKey=fd0c5010162c4488a3638c02cf121734"
const baseURL = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-21&sortBy=publishedAt&apiKey=ffd0c5010162c4488a3638c02cf121734"

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
        .then(response => {
          setArticles(response.data.articles);
        })
        .catch(error => {
          setError(error.response.data.message);
        })
  }, []);

  if (error)  {
    return <div className="error">
       <h2>{ error }</h2>
    </div>;
  } else if (articles) {
    const items = articles.map((article, index) =>
        <div key={index}>
          <h2>{article.title}</h2>
        </div>
    );
    return <div>{ items }</div>;
  }

}

export default NewsList;
