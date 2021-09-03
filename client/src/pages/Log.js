import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ENTRIES, QUERY_ME } from "../utils/queries";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Input from "../components/Entry/Input";
import Auth from '../utils/auth';
import 'bulma/css/bulma.css';

const Log = () => {

  const { loading, data, error } = useQuery(QUERY_ENTRIES, {
    variables: { email: Auth.getProfile().data.email }
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
        {entryList && entryList.map((entry) => (
            <div key={entry.id} className="tile is-parent box">
              <div className="tile is-child">
                  <p>{entry.originalThought}</p>
                  <p>{entry.fixedThought}</p>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3">{error.message}</div>
      )}
      <Input />
    </div>
  );
};

export default Log;
