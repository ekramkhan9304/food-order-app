import React from 'react';
import "./Cart.css";
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = (<ul className='cart-items'>
        {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>)
    return (
        <Modal onclose={props.onclose}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onclose}>Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
