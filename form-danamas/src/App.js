import React, {useState} from "react";
import "./App.css";

export default function App() {
  // =================1
  // what? di bawah ini dibuat state 'value'
  // why is it important? untuk menjadi tampungan data yang di submit (first name, last name, and email)
  // how is it important? karna data yang di-submit perlu ada wadah penampung
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });


  // =================2
  // what? disini dibuat handler utk tiap inputan
  // why is it important? fungsinya utk update state tampungan diatas tiap kali ada perubahan
  // how is it important? karena data yang dimasukin user dapat berubah, jadi dgn taru ini dipastikan bahwa data yang dimasukkan itu yang terbaru

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  // =================
  //
  const [submitted, setSubmitted] = useState(false);

  // =================

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  // =================

  const [valid, setValid] = useState(false);


  return (
    <div className="form-container">
      <h1>Submit Data</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          className="boxInputan"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}

        <input
          className="boxInputan"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}

        <input
          className="boxInputan"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}
        <button className="boxInputan" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
