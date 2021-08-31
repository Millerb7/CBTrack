import React from 'react';

function HomeNavbar ({currentPage, handlePageChange}) {
    return (
        <nav className="nav flex-row justify-space-around p-4 m-2 bg-dark">
          <ul>
              <li>
                  <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                  </a>
              </li>
              <li>
                  <a href="#log" onClick={() => handlePageChange('Log')} className={currentPage === 'Log' ? 'nav-link active' : 'nav-link'}>
                    Log
                  </a>
              </li>
              <li>
                  <a href="#calendar" onClick={() => handlePageChange('Calendar')} className={currentPage === 'Calendar' ? 'nav-link active' : 'nav-link'}>
                    Calendar
                  </a>
              </li>
              <li>
                  <a href="#settings" onClick={() => handlePageChange('Settings')} className={currentPage === 'Settings' ? 'nav-link active' : 'nav-link'}>
                    Settings
                  </a>
              </li>
          </ul>
        </nav>
    );
};

export default HomeNavbar;