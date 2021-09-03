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

  const entryList = data?.entries || [];

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  if(!entryList) {
    return <div>No logs yet!</div>;
  }

  return (
    <div>
      <HomeNavbar />
      <div className="flex-row justify-space-between my-4">
        {entryList &&
          entryList.map((entry) => (
            <div key={entry} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{entry}</span>
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
      <Input />
    </div>
  );
};

export default Log;
