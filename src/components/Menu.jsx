import { useEffect,useState } from "react";


export const Menu = () => {

  const [articles, setArticles] = useState([]);


  useEffect(() => {

    fetch("https://newsapi.org/v2/top-headlines/?q=apple&from=2023-08-02&to=2023-08-02&sortBy=popularity&apiKey=88557f926be44ba8a1835ded6ca0c2d8")
    .then((response)=> response.json())
    .then(data => {
      const articles = data.articles.slice(0, 3);
      setArticles(articles);
      console.log(articles)})
      
      
}, []);


    return (
    <div className="grid grid-cols-3 gap-4 flex p-4 m-3" >
      {
       articles.map((article , index) => (
        <div className="bg-gray-100 shadow-md rounded-lg p-4" key={index}> 
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="mt-4" >{article.description}</p>
        <img 
        className="w-50 h-50 rounded-lg mt-3" alt={article.title}
        src={article.urlToImage}
        style={{ width: '100%', height: '200px' }}
        />
        </div>
      ))
      }
      
    </div>
  )
}
