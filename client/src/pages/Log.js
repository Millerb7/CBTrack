import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ENTRIES, QUERY_ME } from "../utils/queries";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Input from "../components/Entry/Input";

const Log = () => {

  const [entryList, { error }] = useQuery(QUERY_ENTRIES);

  if (!entryList.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
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
    </div>
  );
};

export default Log;
