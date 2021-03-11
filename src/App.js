import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function  App() {

  const [data,  setData]  = useState({
    username  : '',
    password  : ''
  });

  const [form,  setForm]  = useState({
    username  : '',
    password  : ''
  });

  const [submit,  submitted]  = useState(false);

  const printValues  = e =>  {
    e.preventDefault();
    setForm({
      username  : data.username,
      password  : data.password
    });
    submitted(true);
  };

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
        Username:
        <input  
          value={data.username}
          name="username"
          onChange={updateField}
        />
      </label>
      </form>
    </div>
  )
}

export default App;
