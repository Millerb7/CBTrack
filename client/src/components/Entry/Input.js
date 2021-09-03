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

  const [addEntry, { error }] = useMutation(ADD_ENTRY);
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
    <footer className="tile is-ancestor has-background-light m-1">
      <div className="tile is-parent box is-flex is-flex-direction-column">
        <h1 className="is-size-4 has-text-centered p-3">Fix a bad thought:</h1>
        {Auth.loggedIn() ? (
          <div className="has-text-centered">
              <form onSubmit={handleFormSubmit}>
                <div className="tile is-child box is-flex is-flex-direction-column mx-4">
                  <textarea
                    name="originalThought"
                    placeholder="Here's a new thought..."
                    value={originalThought}
                    className="textarea"
                    style={{ lineHeight: "1.5", resize: "vertical" }}
                    onChange={handleChange}
                    rows={3}
                  ></textarea>
                  <p>Character Count: {originalCount}/280</p>
                </div>
                <div className="tile is-child box is-flex is-flex-direction-column">
                  <textarea
                    name="fixedThought"
                    placeholder="Change the thought..."
                    value={fixedThought}
                    className="textarea"
                    style={{ lineHeight: "1.5", resize: "vertical" }}
                    onChange={handleChange}
                    rows={3}
                  ></textarea>
                  <p>Character Count: {fixedCount}/280</p>
                </div>
                <button
                  className="button is-fullwidth py-3"
                  type="submit"
                >
                  Add Thought
                </button>
              </form>
            {error && <div>Something broke</div>}
          </div>
        ) : (
          <p>
            You need to be logged in to log your thoughts. Please{" "}
            <Link to="/login">login.</Link>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Input;
