import React, { useState } from "react";
import BackNavbar from "../components/Navbars/BackNavbar";
import "bulma/css/bulma.css";

function Settings() {
    const [inputOption, setInputOption] = useState("xxxtentacion");
  return (
    <div>
      <BackNavbar />
      <div className="title has-text-centered p-4 m-2">Settings</div>
      <div class="control">
        <h1>Thought Input</h1>
        <label class="radio">
          {inputOption==="simple" ? (<input type="radio" name="simple" checked/>) : (<input type="radio" name="simple" onClick={setInputOption} />) }
          Simple
        </label>
        <label class="radio">
        {inputOption==="advanced" ? (<input type="radio" name="advanced" checked/>) : (<input type="radio" name="advanced" onClick={setInputOption} />) }
          Advanced
        </label>
      </div>
    </div>
  );
}

export default Settings;
