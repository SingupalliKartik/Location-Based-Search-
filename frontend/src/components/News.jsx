import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';

function truncateText2(text) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, 10);
    return truncatedWords.join(' ');
}
function NewsComponent() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a31de33c30d44138a0f8d097af1d7d5b';
                const response = await fetch(url);
               
                const data = await response.json();
               
                setArticles(data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className='flex'>
            <Sidebar></Sidebar>
            {/* <section class="my-12">
            <h1 className='text-center text-3xl '>Top <span className='text-red-600'>Headlines</span> </h1>
  <div class="container px-5 py-6 mx-auto">
  
    <div class="flex lg:px-6 flex-wrap -m-4">
     

        {articles.map((article, index) => (
            <>
                    
                     <div class="xl:w-1/4  md:w-1/2 p-4">
                            <div class=" p-6 border rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={article.urlToImage} alt="content"/>
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font mb-2">{article.author}</h3>
                    <h2 class="text-lg  font-medium title-font mb-4">{truncateText2(article.title)}</h2>
                    <a href={article.url} class="leading-relaxed text-base">Read More ..</a>
                    </div></div>
                    </>))}
          
        </div>
      </div>
      


</section> */}
        </div>
        
        
        </>
        
        
    );
}

export default NewsComponent;
