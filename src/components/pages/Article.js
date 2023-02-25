import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseURL = "https://newsapi.org/v2/everything"
const ApiKey = "fd0c5010162c4488a3638c02cf121734"

const Article = () => {
  const params = useParams();
  const id = params.id;
  const search = params.search;
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);


  if (!articles) return null;

  return (
      <div className="single-news">
        <img src={articles[id].urlToImage} alt={articles[id].source.name}/>
        <h2>{articles[id].title}</h2>
        <p>{articles[id].content}</p>
      </div>
  )
};

export default Article;