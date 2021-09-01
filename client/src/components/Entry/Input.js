import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_THOUGHTS } from '../../utils/mutations';

const Input = () => {
    const [formData, setFormData] = useState({
      originalThought: 'bad',
      fixedThought: 'good',
    });
    let history = useHistory();
  
    const [createMatchup, { error }] = useMutation(CREATE_THOUGHTS);
  
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
      <div className="card d-flex flex-cloumn bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Fix a bad thought:</h1>
        </div>
        <div className="card-body m-5">
            <form onSubmit={handleFormSubmit}>
              <label>Original: </label>
              <textarea name="original" onChange={handleInputChange}>
                
              </textarea>
              <label>Fixed: </label>
              <textarea name="fixed" onChange={handleInputChange}>

              </textarea>
              <button onClick={handleFormSubmit} className="btn btn-danger" type="submit">
                Post Thought
              </button>
            </form>
        </div>
        {error && <div>Something broke</div>}
      </div>
    );
  };

export default Input;