import React from 'react';

function BackNavbar ({currentPage, handlePageChange}) {
    return (
        <nav className="nav flex-row justify-space-around p-4 m-2 bg-dark">
          <ul>
              <li>
                  <a href="#home" onClick={() => handlePageChange('Home')}>
                    back
                  </a>
              </li>
          </ul>
        </nav>
    );
};

export default BackNavbar;