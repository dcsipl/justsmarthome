
import { useState, useEffect } from "react";
import "./validation.css"

export default function Validation() {
  const initialValues = {  email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
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
      
      <form onSubmit={handleSubmit} className="form">
      <label className='subscribe'>Subscribe for NewsLetter</label>
                <label className='email'>Email</label>
       
          
            <input
            className="box"
              type="text"
              name="email"
              placeholder="Enter the email"
              value={formValues.email}
              onChange={handleChange}
            />
          <p style={{position:"absolute",width:"305px",color:"red",fontSize:"18px",left:"1040px",top:"55px"}}>{formErrors.email}</p>
          
          <button className="butt">ok</button>
       
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <><div className="triangle-up"></div>
        <div className="popup">
        <a className="close" href="/">×</a>
        <div className="content">
          Thankyou for subscribing news letter!
        </div>
      </div></>
      ) : null}

      </form>
    </div>
  );
}

// import React from 'react';
// export default function Validation(values){
//     let error={};
          
//          if(!/\S+@\S+\.\S+/.test(values.gmail)){
//             error.gmail="mail is invalid.."     
//             }
//             else if(/\S+@\S+\.\S+/.test(values.gmail)){
//                 error.gmail="Thank you for subscribing newsletter!"     
//                 }
//     return error;
// }


// const [values, setValues]=useState({
//   gmail:""
// });
// const [error ,setError]=useState({
  
// });


// function PopUp(event){
//   event.preventDefault();
//   setError(Validation(values));

// };

// function HandleChange(event){
//   setValues({
//       ...values,
//       [event.target.name]:event.target.value,
//   });
// }


{/* <form className="form">
<label className='subscribe'>Subscribe for NewsLetter</label>
<label className='email'>Email</label>
<input type="text"  className="box" name="gmail" placeholder="Enter the email"value={values.gmail} onChange={HandleChange}/>
{
    error.gmail && <p className="error"style={{position:"absolute",width:"305px",color:"red",fontSize:"15px",left:"1020px",top:"50px"}}>{error.gmail}</p>
}
<button className="butt" onClick={PopUp}>ok</button>
</form> */}

