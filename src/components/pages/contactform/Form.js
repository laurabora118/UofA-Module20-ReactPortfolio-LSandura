import React, { useState } from 'react';

const styles = {
  formStyle: {
    background: '#70CE4E',
  },
};

//Form details how to from React Lessons and refactored
function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [Email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'Name' ? setName(value): setMessage
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${Name} please verify your email`);
    setName('');
    setMessage('');
    setEmail('');
  };


  return (
    <div>
      <nav style={styles.formStyle} className="formsection">
      <div className="container">
      <p>      </p>
      <form className="form">
        <ul>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        </ul>
        <ul>
          <input
          value={Email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        </ul>
        <ul>
        <input
          value={Message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        </ul>
        <ul>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        </ul>
        <p>I will contact you shortly.</p>
      </form>
      </div>
      </nav>
    </div>
  );
}

export default Form;
