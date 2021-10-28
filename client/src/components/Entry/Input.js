import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_ENTRY } from "../../utils/mutations";
import { QUERY_ENTRIES, QUERY_ME } from "../../utils/queries";
import EntryModal from "./EntryModal";
import Auth from "../../utils/auth";

const Input = () => {
  const [originalThought, setOriginalText] = useState("");
  const [fixedThought, setFixedText] = useState("");
  const [modal, setModal] = useState(false);

  const [addEntry, { error }] = useMutation(ADD_ENTRY, {
    update(cache, { data: { addEntry } }) {
      try {
        const { entries } = cache.readQuery({ query: QUERY_ENTRIES });

        cache.writeQuery({
          query: QUERY_ENTRIES,
          data: { entry: [ addEntry, ...entries ] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, entries: [addEntry, ...me.entries] } },
      });
    },
  });

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

    if (name === "originalThought") {
      setOriginalText(value);
    }
    if (name === "fixedThought") {
      setFixedText(value);
    }
  };

  return (
    <footer className="tile is-ancestor has-background-light m-1">
      <div className="tile is-parent box is-flex is-flex-direction-column">
        <h1 className="is-size-4 has-text-centered p-3">Fix a bad thought:</h1>
        {Auth.loggedIn() ? (
          <div className="has-text-centered">
            <form onSubmit={handleFormSubmit} className="is-flex is-flex-direction-row is-flex-wrap-wrap">
              <div className="tile is-child box is-6">
                <textarea
                  name="originalThought"
                  placeholder="Here's a new thought..."
                  value={originalThought}
                  className="textarea"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                  rows={3}
                ></textarea>
              </div>
              <div className="tile is-child box is-6">
                <textarea
                  name="fixedThought"
                  placeholder="Change the thought..."
                  value={fixedThought}
                  className="textarea"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                  rows={3}
                ></textarea>
              </div>
              <button className="button is-fullwidth py-3" type="submit">
                Add Thought
              </button>
              <button className="button is-fullwidth py-3" type="click" onClick={() => setModal(true)}>
                modal
              </button>
              {modal && <EntryModal closeModal={setModal} originalThought={originalThought} setOriginalThought={setOriginalText} fixedThought={fixedThought} setFixedThought={setFixedText} />}
            </form>
          </div>
        ) : (
          <p className="has-text-centered">
            You need to be logged in to log your thoughts. Please{" "}
            <Link to="/login">login.</Link>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Input;
