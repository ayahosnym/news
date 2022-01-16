import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NewsCard from './../NewsCard/NewsCard';
import Pagination from './../Pagination/Pagination';

export default function NewsContent({ category }) {

    const [articles, setArticles] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [articlesPerPage] = useState(8);

    async function getNews() {

        let { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=f6bad2490230483593aeaf8d0977c212`)
        setArticles(data.articles);
    };

    useEffect(() => {
        getNews();
    }, [category]);


    // Get current Articles

    const indexOfLastArticle = currentPage * articlesPerPage;

    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const currentAtricles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Change Pages

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
    };
    
    return (
        <div className='row m-3'>
            {currentAtricles.map((currentAtricle, index) => <NewsCard key={index} articleInfo={currentAtricle} />)}
            <Pagination totalArticles={articles} articlesPerPage={articlesPerPage} paginate={paginate}/> 
            {/* {atricles.map((atricle, index) => <NewsCard key={index} articleInfo={atricle} />)} */}
        </div>
    )
}
