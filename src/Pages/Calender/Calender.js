import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='container' style={{ height: '75vh' }}>
            <div className='d-flex justify-content-center'>

            </div>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}

            />
            <p>You have selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default Calender;