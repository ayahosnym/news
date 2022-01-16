import React from 'react'
import { NavLink } from 'react-router-dom';
import sky from '../../images/sky.jpg';
import skybar from '../../images/skyglass.webp';


export default function Navbar({ setCategory }) {

  const categories = [
    "Sports",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Business",
    "Technology",
  ];

  return (
    <>
      <div className='mt-4 bg-gradient'>
        <div><nav className="navbar navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://news.sky.com/">
              <img src={sky}  alt="sky" height="40"/>
            </a>

            <a className="navbar-brand" href="https://www.sky.com/">
              <img src={skybar}  alt="sky" height="50"/>
              </a>
            <div>
              <a href="https://news.sky.com/watch-live" className="btn btn-danger fw-bold" role="button" aria-pressed="true">Watch Live</a>
            </div>
          </div>
        </nav>
        </div>
       
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-gradient ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  {categories.map((category, index) => {
                    return (
                      < li onClick={() => setCategory(category)} className="nav-item fw-bold " key={index}>
                        <NavLink className="nav-link" to={category}>{category}</NavLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </nav >
        </div>
      </div >
    </>
  )
};


