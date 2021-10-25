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
  // what? state untuk fungsi2 yang berjalan SETELAH tombol submit dipencet
  // why is it important? untuk menambahkan bagian2 yang hanya muncul SETELAH tombol submit dipencet
  // how is it important? karna fungsi2 yang berjalan SETELAH tombol submit dipencet tidak akan berjalan kalau tidak dibuat state khusus
  const [submitted, setSubmitted] = useState(false);

  // =================
  // what? fungsi yang dibuat untuk validasi
  // why is it important? karna memberitahu kita valuenya true jika datanya valid
  // how is it important? untuk memastikan fungsi akan keluar ketika data valid
  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  // =================
  // what? state untuk fungsi yang berjalan SETELAH seluruh data inputan dinyatakan valid
  // why is it important? untuk memastikan kolom inputan valid terisi
  // how is it important? mencegah inputan disubmit dengan data kosong
  const [valid, setValid] = useState(false);


  return (
    <div className="container">
      <h1>Submit Data</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="successMessage">Success! Thank you for registering</div> : null}
        {/*diatas ini, successMessage akan muncul jika data sukses disubmit dan data valid*/}
        <input
          className="boxInputan"
          // diatas ini, classname boxInputan dipakai untuk seluruh box inputan + tombol submit karena stylingnya sama
          type="text"
          // type text digunakan karena bentuk inputan yang diharapkan adalah teks
          placeholder="First Name"
          // placeholder digunakan untuk memandu user untuk menginput data yang tepat pada kolom inputan
          value={values.firstName}
          //value untuk menyambungkan inputan dengan tampungan yang dibuat di state diatas
          onChange={handleFirstNameInputChange}
          // onChange dibuat untuk mengakomodir perubahan yang dilakukan di inputan
        />
        {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
        {/*diatas ini, first-name-error akan muncul jika data disubmit dan data tidak valid/kosong*/}

        <input
          className="boxInputan"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}
        {/*diatas ini, last-name-error akan muncul jika data disubmit dan data tidak valid/kosong*/}

        <input
          className="boxInputan"
          type="email"
          // type email digunakan karena bentuk inputan yang diharapkan adalah email
          placeholder="Email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}
        {/*diatas ini, email-error akan muncul jika data disubmit dan data tidak valid/kosong*/}

        <button className="boxInputan" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
