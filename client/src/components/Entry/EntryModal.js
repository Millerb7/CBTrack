import React, { useState } from "react";

function EntryModal({ closeModal, originalThought, setOriginalThought, setFixedThought, handleFormSubmit }) {
  const [incident, setIncident] = useState("");
  const [location, setLocation] = useState("");
  const [people, setPeople] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "originalThought") {
        setOriginalThought(value);
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

    setFixedThought(incident+"\\n"+location+"\\n"+people);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => closeModal(false)}></div>
      <div className="modal-card">
        <section className="modal-card-body">
        <nav className="has-text-right mb-5" onClick={() => closeModal(false)}>X</nav>
          <div className=" is-flex is-flex-direction-row has-text-centered">
            <form
              onSubmit={handleFormSubmit}
              className="is-flex is-flex-direction-row is-flex-wrap-wrap"
            >
              <textarea
                name="originalThought"
                placeholder="New thought..."
                value={originalThought}
                className="textarea"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                rows={3}
              ></textarea>
              <textarea
                name="incident"
                placeholder="What happened when this thought occured?"
                value={incident}
                className="textarea"
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default EntryModal;
