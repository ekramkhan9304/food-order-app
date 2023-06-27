import React, { useContext } from 'react';
import "./Cart.css";
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }

    const cartItems = (<ul className='cart-items'>
        {cartCtx.items.map((item) => (
            // <li key={item.id}>{item.name}</li>
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
        ))}
    </ul>)

    return (
        <Modal onclose={props.onclose}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onclose}>Close</button>
                {hasItems && <button className='button'>Order</button>}

            </div>
        </Modal>
    )
}

export default Cart
