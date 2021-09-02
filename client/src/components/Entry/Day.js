import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DATE } from '../../utils/queries';
import dateFormat from '../../utils/dateFormat';

const Day = ({ currentDate }) => {
    const { loading, data } = useQuery(QUERY_DATE);
  
    const entryList = data?.entries || [];
  
    return (
      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Logs from {dateFormat(currentDate)}!</h1>
        </div>
        <div className="card-body m-5">
          {loading ? (
            <div>Loading...</div>
          ) : (
              <div name="log">
                {entryList.map((entry) => {
                  return (
                    <card key={entry._id}>
                        <textarea value={entry.originalThought} readonly>
                        {entry.originalThought}
                        </textarea>
                        <textarea value={entry.fixedThought} readonly>
                        {entry.fixedThought}
                        </textarea>
                    </card>
                  );
                })}
              </div>
          )}
        </div>
      </div>
    );
  };

export default Day;