import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Graphic () {
    const [date, setDate] = useState(new Date());

    const onDateClick = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    return (
        <div className="nav flex-row justify-space-around p-4 m-2 bg-dark">
            <Calendar 
                onChange={onDateClick}
                value={date}
                showNeighboringMonth={false}
                locale={"en-US"}
                next2Label={null}
                prev2Label={null}
                minDetail={"year"}
            />
        </div>
    );
};

export default Graphic;