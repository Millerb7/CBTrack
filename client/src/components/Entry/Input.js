import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

const Input = () => {
    const { loading, data } = useQuery(/*QUERY THOUGHTS*/);
  
    const thoughtList = data?.thought || [];
  
    const [formData, setFormData] = useState({
      originalThought: 'bad',
      fixedThought: 'good',
    });
    let history = useHistory();
  
    const [createMatchup, { error }] = useMutation(/*CREATE THOUGHTS*/);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await createMatchup({
          variables: { ...formData },
        });
  
        history.push(`/matchup/${data.createMatchup._id}`);
      } catch (err) {
        console.error(err);
      }
  
      setFormData({
        originalThought: 'bad',
        fixedThought: 'good',
      });
    };
  
    return (
      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Let's create a matchup!</h1>
        </div>
        <div className="card-body m-5">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <label>Tech 1: </label>
              <select name="tech1" onChange={handleInputChange}>
                {thoughtList.map((thought) => {
                  return (
                    <option key={thought._id} value={thought.name}>
                      {thought.name}
                    </option>
                  );
                })}
              </select>
              <button className="btn btn-danger" type="submit">
                Post Thought
              </button>
            </form>
          )}
        </div>
        {error && <div>error...</div>}
      </div>
    );
  };

export default Input;