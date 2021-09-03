import React from 'react';
import Input from '../components/Entry/Input';
import HomeNavbar from '../components/Navbars/HomeNavbar';
import Articles from '../components/Articles/Articles';
import 'bulma/css/bulma.css';

const Home = () => {
  // logic to decide what is shown

  return (
    <div>
      <HomeNavbar />
      <div className="tile is-ancestor">
        <div className="tile is-parent box is-flex is-flex-direction-column is-align-items-center m-5">
        <h1 className="title is-size-1">Welcome to self help!</h1>
        <div>
          <Articles />
        </div>
      </div>
    </div>
    <Input />
    </div>
  );
};

export default Home;