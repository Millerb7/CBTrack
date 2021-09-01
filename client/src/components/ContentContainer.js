import React, { useState } from 'react';
import Articles from './Articles/Articles';
import Logs from './Entry/Log';
import Calendar from './Calendar/Calendar';
import Navbar from './Navbars/HomeNavbar';
import Input from './Entry/Input';
import BackNavbar from './Navbars/BackNavbar';
import Settings from '../pages/Settings';
import Login from '../components/Login';

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Articles />
        </div>
      );
    }
    if (currentPage === 'Log') {
      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Logs />
        </div>
      );
    }
    if (currentPage === 'Calendar') {
      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Calendar />
        </div>
      );
    }
    if (currentPage === 'Settings') {
      return (
        <div>
          <BackNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Settings />
        </div>
      );
    }
    if (currentPage === 'Login') {
      return (
        <div>
          <BackNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Login />
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


