import React, { useState } from "react";
import BackNavbar from "../components/Navbars/BackNavbar";
import "bulma/css/bulma.css";

let inputType = "simple";

function Settings() {
  console.log('type '+inputType);
    const changeInput = (inputOption) => {
      console.log('option '+inputOption);
      inputType = inputOption;
    }

  return (
    <div>
      <BackNavbar />
      <div className="title has-text-centered p-4 m-2">Settings</div>
      <div className="control">
        <h1>Thought Input</h1>
        <label className="radio">
          {inputType==="simple" ? (<input type="radio" name="input" value="simple" checked onChange={() => changeInput("simple")}/>):(<input type="radio" name="input" value="simple" onChange={() => changeInput("simple")}/>)}
          Simple
        </label>
        <label className="radio">
        {inputType==="advanced" ? (<input type="radio" name="input" value="advanced" checked onChange={() => changeInput("advanced")} />):(<input type="radio" name="input" value="advanced" onChange={() => changeInput("advanced")} />)}
          Advanced
        </label>
      </div>
    </div>
  );
}

export { Settings as default, inputType };
