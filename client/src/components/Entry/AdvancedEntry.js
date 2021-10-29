import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ENTRY } from "../../utils/mutations";
import { QUERY_ENTRIES, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

function AdvancedEntry() {
  const [originalThought, setOriginalThought] = useState("");
  const [fixedThought, setFixedThought] = useState("");
  const [incident, setIncident] = useState("");
  const [location, setLocation] = useState("");
  const [people, setPeople] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "originalThought") {
        setOriginalThought(value);
    }
    if (name === "fixedThought") {
      setFixedThought(value);
  }
    if (name === "incident") {
        setIncident(value);
    }
    if (name === "location") {
        setLocation(value);
    }
    if (name === "people") {
        setPeople(value);
    }
  };

  const [addEntry, { error }] = useMutation(ADD_ENTRY, {
    update(cache, { data: { addEntry } }) {
      try {
        const { entries } = cache.readQuery({ query: QUERY_ENTRIES });

        cache.writeQuery({
          query: QUERY_ENTRIES,
          data: { entry: [ ...entries, addEntry ] },
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
          incident,
          location,
          people,
          entryAuthor: Auth.getProfile().data._id,
        },
      });

      setOriginalThought("");
      setFixedThought("");
      setIncident("");
      setLocation("");
      setPeople("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="">
            <form
              onSubmit={handleFormSubmit}
              className="is-flex is-flex-direction-row is-flex-wrap-wrap"
            >
              <textarea
                name="originalThought"
                placeholder="New thought..."
                value={originalThought}
                className="textarea is-12"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                rows={3}
              ></textarea>
              <textarea
                name="fixedThought"
                placeholder="Changed thought..."
                value={fixedThought}
                className="textarea column is-one-quarter is-gapless"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                rows={3}
              ></textarea>
              <textarea
                name="incident"
                placeholder="What happened when this thought occured?"
                value={incident}
                className="textarea column is-half is-gapless"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                rows={3}
              ></textarea>
              <textarea
                name="location"
                placeholder="Where did the thought occur?"
                value={location}
                className="textarea"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                rows={3}
              ></textarea>
              <textarea
                name="people"
                placeholder="Did anyone cause the thought?"
                value={people}
                className="textarea"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                rows={3}
              ></textarea>
              <footer className="has-text-centered">
                <button className="button is-fullwidth py-3" type="submit">
                  Add Thought
                </button>
              </footer>
            </form>
    </footer>
  );
}

export default AdvancedEntry;
