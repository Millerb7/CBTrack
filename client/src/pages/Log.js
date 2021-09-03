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

  return (
    <div className="">
      <HomeNavbar />
      <div className="is-flex flex-row justify-space-between my-4">
        {entryList &&
          entryList.map((entry) => (
            <div key={entry} className="">
              <div className="">
                <h4 className="">
                  <span>{entry}</span>
                </h4>
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
