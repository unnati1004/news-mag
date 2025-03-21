import React, { useEffect, useState } from "react";
import { NewsItem } from "./newsItem";

export const NewsBoard = () => {
  const [article, setArticle] = useState([]);

  // useEffect(() => {
  //   const url = `https://newsapi.org/v2/everything?q=Apple&from=2025-03-20&sortBy=popularity&apiKey=${
  //     import.meta.env.VITE_API_KEY
  //   }`;

  //   fetch(url)
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error(`HTTP Error: ${res.status}`);
  //     }
  //     return res.json();
  //   }) 
  //   .then((data) => {
  //     if (data.status !== "ok") {
  //       throw new Error(data.message || "API Error");
  //     }
  //     console.log(data);
      
  //     setArticle(data.articles);
  //   })
  //   .catch((error) => console.error("Error fetching news:", error));
  
  // }, []);
  // console.log(article);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">News</span>
      </h2>
      {/* {article.map((news,index)=>{
        return <NewsItem key={index} title={news.title}/>
      })} */}
      <div className="">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      </div>
    </div>
  );
};
