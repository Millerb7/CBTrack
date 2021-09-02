import React from 'react';
import Input from '../components/Entry/Input';
import HomeNavbar from '../components/Navbars/HomeNavbar';
import Graphic from '../components/Calendar/Graphic';
import Day from '../components/Calendar/Day';

function Calendar () {
    return (
        <div>
        <HomeNavbar />
      <div className="card bg-white card-rounded w-50">
        <div className="card-body m-5">
          <h2>This is your daily progress!</h2>
          <div>
            <Graphic />
          </div>
          <div>
            <Day />
          </div>
        </div>
        <div className="card-footer text-center m-3">
          <Input />
        </div>
      </div>
      </div>
    );
};

export default Calendar;