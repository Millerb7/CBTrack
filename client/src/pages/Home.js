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
    <div className="card bg-white card-rounded w-50">
      <div className="card-body m-5">
        <h2>Welcome to self help!</h2>
        <div>
          <Articles />
        </div>
      </div>
      <div className="card-footer text-center m-3">
        <Input />
      </div>
    </div>
    </div>
  );
};

export default Home;