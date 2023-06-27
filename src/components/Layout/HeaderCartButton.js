import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import "./HeaderCartButton.css";
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    useEffect(() => {
        setBtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)
        return () => clearTimeout(timer)
    }, [cartCtx.items])
    return (
        <>
            <button className={`button ${btnIsHighlighted ? 'bump' : ''}`} onClick={props.onClick}>
                <span className='icon'>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className='badge'>{numberOfCartItems}</span>
            </button>
        </>
    )
}

export default HeaderCartButton
