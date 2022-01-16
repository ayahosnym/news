import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';



export default function App() {

  const [category, setCategory] = useState("sport");


  return (
    <div className='container'>
      <Navbar setCategory={setCategory} />
      <NewsContent category={category} />
      <Footer />
    </div>
  )
};



