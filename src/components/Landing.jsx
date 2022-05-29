import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/Undraw_Books.svg'; 

const Landing = () => {
    return (
 <section id='landing '>
<header>
    <div className='header__container'>
        <div className="div header__description">
            <h1>Australia's most dynamic online library platform</h1>
            <h2>Find your life changing book with <span className='purple'>Library</span></h2>
            <Link to="/Books">
                <button className="btn">
                    Browse Books
                </button>
            </Link>
        </div>
        <figure className='header__img--wrapper'>
            <img src={UndrawBooks} alt="" />
        </figure>
    </div>
</header>
 </section>
    );
}

export default Landing;
