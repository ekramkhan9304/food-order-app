import React from 'react';
import "./Header.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className='main-image'>
                <img src={meals} alt="A table full of delicious food" />
            </div>
        </>
    )
}

export default Header
