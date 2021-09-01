import React, { useState } from 'react';
import Articles from './Articles/Articles';
import Logs from '../pages/Log';
import Calendar from './Calendar/Calendar';
import Navbar from './Navbars/HomeNavbar';
import Input from './Entry/Input';
import BackNavbar from './Navbars/BackNavbar';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          dddd
          <Articles />
        </div>
      );
    }
    if (currentPage === 'Log') {
      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          dddd
          <Logs />
        </div>
      );
    }
    if (currentPage === 'Calendar') {
      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          dddd
          <Calendar />
        </div>
      );
    }
    if (currentPage === 'Settings') {
      return (
        <div>
          <BackNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
          dddd
          <Settings />
        </div>
      );
    }
    if (currentPage === 'Login') {
      return (
        <div>
          <BackNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
          dddd
          <Login />
        </div>
      );
    } 
    if (currentPage === 'Signup') {
      return (
        <div>
          <BackNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
          dddd
          <Signup />
        </div>
      );
    } 
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const hasInput = (page) => { 
    if (page === 'Home' || page === 'Log' || page === 'Calendar') {
      return <Input />;
    }
  }

  return (
    <div>
      {renderPage()}
      {hasInput(currentPage)}
    </div>
  );
};


