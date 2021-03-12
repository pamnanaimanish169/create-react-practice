import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function  App() {

  // Set the initial state/values of the form 
  const [data,  setData]  = useState({
    firstname : '',
    lastname  : '',
    number  : '',
    message : '',
    country : ''
  });

  const [form,  setForm]  = useState({
    firstname : '',
    lastname  : '',
    number  : '',
    message : '',
    country : ''
  });

  const [submit,  submitted]  = useState(false);

  const printValues = e =>  {
    e.preventDefault();
    setForm({
      firstname : data.firstname,
      lastname  : data.lastname,
      number  : data.number,
      message : data.message,
      country : data.country
    });
    submitted(true);
  }

  const updateField = e =>  {
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  };

  return(
    <div>
      <form onSubmit={printValues}>
        <label>
          First Name
          <input  
          value={data.firstname}
          name="firstname"
          onChange={updateField}
          />
        </label>
        <br />
        <label>
          Last  Name
          <input  
          value={data.lastname}
          name="lastname"
          onChange={updateField}
          />
        </label>
        <br />
        <label>
          Mobile  Number
          <input
          type="number"
          value={data.number}
          name="number"
          onChange={updateField}
          />
        </label>
        <br />
        <label>
          Pick Your Country
          <select value={data.country}  name="country" onChange={updateField}>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="britian">England</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
          </select>
        </label>
        <br />
        <label>
          Message
          <textarea 
          value={data.message}
          name="message"
          onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>

      <p>{submit?form.firstname:null}</p>
      <p>{submit?form.lastname:null}</p>
      <p>{submit?form.number:null}</p>
      <p>{submit?form.country:null}</p>
      <p>{submit?form.message:null}</p>
    </div>
  );
}

export default App;
