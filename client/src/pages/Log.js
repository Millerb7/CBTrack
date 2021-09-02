import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ENTRIES } from '../utils/queries';
import HomeNavbar from '../components/Navbars/HomeNavbar';
import Input from '../components/Entry/Input';

const Log = () => {
    const { loading, data } = useQuery(QUERY_ENTRIES);
  
    const entryList = data?.entry || [];
  
    const [formData, setFormData] = useState({
      originalThought: 'bad',
      fixedThought: 'good',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // handle page change to single entry...
  
    return (
      <div>
        <HomeNavbar />
      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Previous Logs!</h1>
        </div>
        <div className="card-body m-5">
          {loading ? (
            <div>Loading...</div>
          ) : (
              <div name="log" onChange={handleInputChange}>
                {entryList.map((entry) => {
                  return (
                    <card key={entry._id}>
                        <textarea value={entry.originalThought}>
                        {entry.originalThought}
                        </textarea>
                        <textarea value={entry.fixedThought}>
                        {entry.fixedThought}
                        </textarea>
                    </card>
                  );
                })}
              </div>
          )}
        </div>
      </div>
      <Input />
      </div>
    );
  };

export default Log;