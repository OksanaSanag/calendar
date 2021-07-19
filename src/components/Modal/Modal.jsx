import React, { useState, useEffect, useContext } from 'react';
import './style.css';

import { ModalContext } from '../../context';


export const Modal = (props) => {
    const [eventTitle, setEventTitle] = useState('');
    const { closeModal } = useContext(ModalContext);

    const selectInfo = props.data;     //console.log('props.data::', selectInfo);

    const doEvendTitle = (e) => {
        setEventTitle(e.target.value);
    };

    const saveEvent = () => {

      }
    
    return (
        <div className="modal">
            <div className="cross" >X</div>
            <div className="modal-body">
                <input type='text' className='modal-input' placeholder='event name' value={eventTitle} onChange={doEvendTitle}></input>
                <input className='modal-input' placeholder='event day' value={selectInfo.startStr}></input>
                <input className='modal-input' placeholder='event time'></input>
                <input className='modal-input' placeholder='notes'></input>
            </div>
            <div className="modal-footer">
                <button className='modal-button' onClick={closeModal}>Cancel</button>
                <button className='modal-button' onClick={saveEvent}>Save</button>
            </div>
        </div>
    )
}