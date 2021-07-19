import React, { useState, useEffect, useContext } from 'react';
import './style.css';

import { ModalContext } from '../../context';

import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../event-utils'



export const Modal = (props) => {
    const {children, title} = props; console.log('propsvalue', props.value);

    const [eventTitle, setEventTitle] = useState('first ev');
    const { openModal, closeModal } = useContext(ModalContext);

    console.log('props', props); 

    const doEvendTitle = (e) => {
        //console.log(e.target.value);
        setEventTitle(e.target.value);
        //console.log('eventTitle', eventTitle);
    };

    const handleDateSelect = (selectInfo) => {
        let title = eventTitle; //console.log('title::', title);
        let calendarApi = selectInfo.view.calendar
        // calendarApi.unselect() // clear date selection
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }
    
    return (
        <div className="modal">
            <div className="cross" >X</div>
            <div className="modal-body">
                <input type='text' className='modal-input' placeholder='event name' value={eventTitle} onChange={doEvendTitle}></input>
                <input className='modal-input' placeholder='event date'></input>
                <input className='modal-input' placeholder='event time'></input>
                <input className='modal-input' placeholder='notes'></input>
            </div>
            <div className="modal-footer">
                <button className='modal-button' onClick={closeModal}>Cancel</button>
                <button className='modal-button' onClick={handleDateSelect}>Save</button>
            </div>
        </div>
    )
}