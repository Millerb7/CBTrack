import React, { useState } from 'react';
import Input from '../components/Entry/Input';
import HomeNavbar from '../components/Navbars/HomeNavbar';
import Day from '../components/Entry/Day';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bulma/css/bulma.css';


function Daily () {
    const [date, setDate] = useState(new Date());

    const onDateClick = (newDate) => {
        setDate(newDate);
        console.log(date);
    }

    return (
        <div>
        <HomeNavbar />
      <div className="card bg-white card-rounded w-50">
        <div className="card-body m-5">
          <h2>This is your daily progress!</h2>
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
          <div>
            <Day currentDay={date}/>
          </div>
        </div>
        <div className="card-footer text-center m-3">
          <Input />
        </div>
      </div>
      </div>
    );
};

export default Daily;