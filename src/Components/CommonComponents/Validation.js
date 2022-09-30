import React, { useState } from "react";
import "./validation.css"

export default function Validation() {
  const [datas, setDatas] = useState([]);

  const [email, setEmail] = useState({ email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function HandleChange(e) {
    const { name, value } = e.target;
    setEmail({ [name]: value });
  };

  function HandleSubmit(e) {
    e.preventDefault();
    let data = {
      email
    }
    setDatas([...datas, data]);
    setFormErrors(Validate(email));
    setIsSubmit(true);
  };
  localStorage.setItem('datas', JSON.stringify(datas));

  function Validate(values) {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }

    return errors;
  };

  return (
    <div className="container">
      <form className="form" onSubmit={HandleSubmit}>
        <label className="subscribe">Subscribe for NewsLetter</label>
        <label className="email">Email</label>
        <input className="box"
          type="text"
          name="email"
          placeholder="Enter the email"
          value={email.email}
          onChange={HandleChange} />
        <button className="button">ok</button>
        <p className="error">{formErrors.email}</p>

        {Object.keys(formErrors).length === 0 && isSubmit ?
          (<>
            <div className="triangle-up"></div>
            <div className="popup">
              <div className="content">Thankyou for subscribing news letter!</div>
              <a className="close" href="/">×</a>
            </div>
          </>) : null}
      </form>
    </div>
  );
}

