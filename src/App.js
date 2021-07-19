import React from 'react';

import './App.css';

import {ModalProvider} from './context';
import { FullCalendarComponent } from './components';

function App() {
  return (
    <ModalProvider>
      <div className='fullCalendar'>
        <FullCalendarComponent />
      </div>
    </ModalProvider>
  );
}

export default App;
