import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';

function NotFound() {
  let location = useLocation();
  return (
    <div className="card card-rounded w-50">
      <div className="card-header has-text-centered">
        <h1>
          No match for <code>{location.pathname}</code>
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
