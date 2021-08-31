import React, { useState } from 'react';
import Articles from './Articles/Articles';
import Logs from './Entry/Log';
import Calendar from './Calendar/Calendar';
import Navbar from './Navbars/HomeNavbar';
import Input from './Entry/Input';

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Articles />;
    }
    if (currentPage === 'Log') {
      return <Logs />;
    }
    if (currentPage === 'Calendar') {
      return <Calendar />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Input />
    </div>
  );
};


