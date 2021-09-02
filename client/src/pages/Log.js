import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ENTRIES } from '../utils/queries';
import HomeNavbar from '../components/Navbars/HomeNavbar';
import Input from '../components/Entry/Input';

const Log = () => {
    const { loading, data } = useQuery(QUERY_ENTRIES);
  
    const thoughtList = data?.thought || [];
  
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
                {thoughtList.map((thought) => {
                  return (
                    <card key={thought._id}>
                        <textarea value={thought.originalThought}>
                        {thought.originalThought}
                        </textarea>
                        <textarea value={thought.fixedThought}>
                        {thought.fixedThought}
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