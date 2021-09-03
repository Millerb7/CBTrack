import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DATE } from '../../utils/queries';
import Auth from '../../utils/auth';

const Day = ({ currentDate }) => {
  const { loading, data, error } = useQuery(QUERY_DATE, {
    variables: { email: Auth.getProfile().data.email, date: currentDate }
  });

  const entryList = data?.user.entries || [];

  console.log(data);
  
    return (
      <div>
      <div className="tile is-ancestor">
        <div className="tile is-parent box">
        <div className="has-text-centered">
          <h1 className="title">Logs from {currentDate}!</h1>
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
      {error && (
        <div className="my-3 p-3">{error.message}</div>
      )}
      </div>
    );
  };

export default Day;