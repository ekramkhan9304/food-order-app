import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css";
const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onclose} />
}

const ModalOverlay = (props) => {
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onclose={props.onclose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal
