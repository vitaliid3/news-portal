import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-18&sortBy=publishedAt&apiKey=fd0c5010162c4488a3638c02cf121734"

const NewsList = () => {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    // axios.get(baseURL).then((response) => {
    //   setArticles(response.data.articles);
    // });
    setArticles(new Date());
  }, []);

  if (!articles) return null;

  // const listItems = articles.map((article, index) =>
  //     <div key={index}>
  //       <h1>{article.title}</h1>
  //     </div>
  // );

  return <div>{ articles }</div>;
}

export default NewsList;