import React from 'react'

export default function Pagination({ articlesPerPage, totalArticles, paginate }) {

    const pageNumbers = [];

    
    for (let i = 1; i <= Math.ceil(totalArticles.length / articlesPerPage); i++) {

        pageNumbers.push(i);
    };

    return (
        <div>
            <nav>
                <ul className="pagination pagination-md justify-content-center">
                    {pageNumbers.map((number) =>
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} className="page-link bg-dark text-white" href="#">{number}</a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
