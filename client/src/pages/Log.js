import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER_ENTRIES, QUERY_ME } from "../utils/queries";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Input from "../components/Entry/Input";
import Auth from "../utils/auth";
import dateFormat from "../utils/dateFormat";
import "bulma/css/bulma.css";

const Log = () => {
  const { loading, data, error } = useQuery(QUERY_USER_ENTRIES, {
    variables: { email: Auth.getProfile().data.email },
  });

  const entryList = data?.user.entries || [];

  console.log(data?.user.entries);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!entryList) {
    return <div>No logs yet!</div>;
  }

  return (
    <div className="">
      <HomeNavbar />
      <div className="tile is-ancestor is-flex is-flex-direction-column m-3">
        {entryList &&
          entryList.map((entry) => (
            <div
              key={entry._id}
              className="tile is-parent box is-flex is-flex-direction-column"
            >
              <div className="tile p-3 is-flex is-flex-direction-column">
                <div className="">
                  <h3>{entry.originalThought}</h3>
                </div>
                {entry.fixedThought ? (
                  <div className="is-flex is-flex-direction-row">
                    <h3 className="has-text-centered">Changed Thought: </h3>
                    <p>{entry.fixedThought}</p>
                  </div>
                ) : (
                  <></>
                )}
                {entry.incident ? (
                  <div className="is-flex is-flex-direction-row">
                    <h3 className="has-text-centered">What caused thought: </h3>
                    <p>{entry.incident}</p>
                  </div>
                ) : (
                  <></>
                )}
                {entry.location ? (
                  <div className="is-flex is-flex-direction-row">
                    <h3 className="has-text-centered">Where thought occured: </h3>
                    <p>{entry.location}</p>
                  </div>
                ) : (
                  <></>
                )}
                {entry.people ? (
                  <div className="is-flex is-flex-direction-row">
                    <h3 className="has-text-centered">Who was involved: </h3>
                    <p>{entry.people}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className="has-text-right">{entry.createdAt}</p>
            </div>
          ))}
      </div>
      {error && <div className="my-3 p-3">{error.message}</div>}
      <Input />
    </div>
  );
};

export default Log;
