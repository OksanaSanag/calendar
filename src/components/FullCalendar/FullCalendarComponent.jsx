import React, { useState, useContext } from 'react';

// FullCalendar's imports
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from '../../event-utils';


import { ModalContext } from '../../context';
import './style.css';

export const FullCalendarComponent = () => {
    const { openModal } = useContext(ModalContext);

    const [eventData, setEventData] = useState([]); console.log('eventData', eventData)

    const clickModalButton = (selectInfo) => {
        setEventData(selectInfo); console.log('selectInfo::1', selectInfo)
        openModal();
    };

    const handleEventClick = (clickInfo) => {
        // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
        // }
    };

    return (
        <div className='demo-app'>
            <div className='demo-app-main'>
                <FullCalendar
                    value = {eventData}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={clickModalButton}
                    // eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                />
            </div>
        </div>
        
    )
}
