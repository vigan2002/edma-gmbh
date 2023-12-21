import React from 'react'
import './modal.scss'

const Modal = (props) => {

    const {
        logo, name, desc,
        children ,closeModal, 
    } = props

    return (
        <div className='modal'>
            <div className="modal-wrapper">
                <div className='card-modal'>
                    <div className='info-modal'>
                        <img src={logo} alt={name} />
                        <p>Name: <h2>{name}</h2>
                            <br />Description: <span>{desc}</span></p>
                            {children && children}
                        <button className='close' onClick={() => closeModal()}>close</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Modal