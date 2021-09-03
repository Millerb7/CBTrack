import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_ENTRY } from "../../utils/mutations";
import { QUERY_ENTRIES, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const Input = () => {
  const [originalThought, setOriginalText] = useState("");
  const [fixedThought, setFixedText] = useState("");

  const [originalCount, setOriginalCount] = useState(0);
  const [fixedCount, setFixedCount] = useState(0);

  const [addEntry, { error, data }] = useMutation(ADD_ENTRY)
  //   , {
  //   update(cache, { data: { addEntry } }) {
  //     try {
  //       const { entries } = cache.readQuery({ query: QUERY_ENTRIES });

  //       cache.writeQuery({
  //         query: QUERY_ENTRIES,
  //         data: { entries: [addEntry, ...entries] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, entries: [addEntry, ...me.entries] } },
  //     });
  //   }
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEntry({
        variables: {
          originalThought,
          fixedThought,
          entryAuthor: Auth.getProfile().data._id,
        },
      });

      setOriginalText("");
      setFixedText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "originalThought" && value.length <= 280) {
      setOriginalText(value);
      setOriginalCount(value.length);
    }
    if (name === "fixedThought" && value.length <= 280) {
      setFixedText(value);
      setFixedCount(value.length);
    }
  };

  return (
    <div className="card d-flex flex-cloumn bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Fix a bad thought:</h1>
      </div>
      {Auth.loggedIn() ? (
        <div>
          <div className="card-body m-5">
            <form onSubmit={handleFormSubmit}>
              <label>Original: </label>
              <textarea
                name="originalThought"
                placeholder="Here's a new thought..."
                value={originalThought}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <p>Character Count: {originalCount}/280</p>

              <label>Fixed: </label>
              <textarea
                name="fixedThought"
                placeholder="Change the thought..."
                value={fixedThought}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <p>Character Count: {fixedCount}/280</p>
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </form>
          </div>
          {error && <div>Something broke</div>}
        </div>
      ) : (
        <p>
          You need to be logged in to log your thoughts. Please{" "}
          <Link to="/login">login.</Link>
        </p>
      )}
    </div>
  );
};

export default Input;
