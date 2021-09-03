import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DATE } from '../../utils/queries';
import dateFormat from '../../utils/dateFormat';

const Day = ({ currentDate }) => {
    const { loading, data } = useQuery(QUERY_DATE);
  
    const entryList = data?.entries || [];
  
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent box">
        <div className="has-text-centered">
          <h1 className="title">Logs from {dateFormat(currentDate)}!</h1>
        </div>
        <div className="m-5">
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
      </div>
    );
  };

export default Day;