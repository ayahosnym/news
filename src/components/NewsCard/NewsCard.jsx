import React from 'react';
import logo from '../../images/skyback.jpg'  
// the photo should be in src

export default function NewsCard({ articleInfo }) {

    let { urlToImage, title, publishedAt } = articleInfo;
    return (

        <div className='col-md-6 col-lg-3'>
            <div className='text-center text-white mb-4'>
                {urlToImage ?
                    <img src={urlToImage} className='w-100 rounded-3 mb-2' height='200' alt="article images" />
                    :
                    <img src={logo} className='w-100 rounded-3 mb-2' height='200' alt="article images" />}
                <h2 className='h6 p-3 bg-gradient fw-bold rounded-3'>{title}</h2>
                <span>{publishedAt}</span>
            </div>
        </div>
    )
}


