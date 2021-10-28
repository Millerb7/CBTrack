import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DAY } from '../../utils/queries';
import Auth from '../../utils/auth';
import dateFormat from '../../utils/dateFormat';
import dayFormat from '../../utils/dayFormat';

const Day = ({ currentDate }) => {
  console.log(dayFormat(currentDate));
  const { loading, data, error } = useQuery(QUERY_DAY, {
    variables: { userId: Auth.getProfile().data._id, day: dayFormat(currentDate).toString() }
  });
  
  console.log(data);
  const entryList = data?.day || [];
  
    return (
      <div>
      <div className="tile is-ancestor">
        <div className="tile is-parent box is-flex is-flex-direction-column">
        <div className="has-text-centered">
          <h1 className="title">Logs from {dateFormat(currentDate)}!</h1>
        </div>
        <div className="m-5">
          {loading ? (
            <div>Loading...</div>
          ) : (
              <div name="log">
                {entryList && entryList.map((entry) => {
                  return (
                    <div
                    key={entry._id}
                    className="tile is-parent box is-flex is-flex-direction-column"
                  >
                    <div className="tile p-3 is-flex is-flex-direction-column">
                      <div className="">
                        <h3 className="subtitle has-text-centered has-text-weight-medium">{entry.originalThought}</h3>
                      </div>
                      {entry.fixedThought ? (
                        <div className="is-flex is-flex-direction-row">
                          <h3 className="has-text-centered">Changed Thought:&nbsp;&nbsp;&nbsp;</h3>
                          <p>{entry.fixedThought}</p>
                        </div>
                      ) : (
                        <></>
                      )}
                      {entry.incident ? (
                        <div className="is-flex is-flex-direction-row">
                          <h3 className="has-text-centered">What caused thought:&nbsp;&nbsp;&nbsp;</h3>
                          <p>{entry.incident}</p>
                        </div>
                      ) : (
                        <></>
                      )}
                      {entry.location ? (
                        <div className="is-flex is-flex-direction-row">
                          <h3 className="has-text-centered">Where thought occured:&nbsp;&nbsp;&nbsp;</h3>
                          <p>{entry.location}</p>
                        </div>
                      ) : (
                        <></>
                      )}
                      {entry.people ? (
                        <div className="is-flex is-flex-direction-row">
                          <h3 className="has-text-centered">Who was involved:&nbsp;&nbsp;&nbsp;</h3>
                          <p>{entry.people}</p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <p className="has-text-right">{entry.createdAt}</p>
                  </div>
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