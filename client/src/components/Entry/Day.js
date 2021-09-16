import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DAY } from '../../utils/queries';
import Auth from '../../utils/auth';
import dateFormat from '../../utils/dateFormat';

const Day = ({ currentDate }) => {
  console.log('peepo ' + currentDate);
  const { loading, data, error } = useQuery(QUERY_DAY, {
    variables: { userId: Auth.getProfile().data._id, day: dateFormat(currentDate) }
  });

  const entryList = data?.user.entries || [];
  
    return (
      <div>
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
      {error && (
        <div className="my-3 p-3">{error.message}</div>
      )}
      </div>
    );
  };

export default Day;