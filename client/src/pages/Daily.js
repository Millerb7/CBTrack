import React, { useState } from "react";
import Input from "../components/Entry/Input";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Day from "../components/Entry/Day";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bulma/css/bulma.css";

function Daily() {
  const [date, setDate] = useState(new Date());
  
  const onDateClick = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <HomeNavbar />
      <div className="tile is-ancestor">
        <div className="tile is-parent box is-flex is-flex-direction-column is-align-items-center m-5">
          <h1 className="title is-size-1">This is your daily progress!</h1>
          <div className="p-4 m-2 bg-dark">
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
            <Day currentDate={ date } />
          </div>
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Daily;
