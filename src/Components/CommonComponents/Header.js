import React,{useState} from 'react';
import Logo1 from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from './Validation.js';







export default function Header(props) {
  
    
    const [values, setValues]=useState({
        gmail:""
    });
    const [error ,setError]=useState({
        
    });
    
    
    function PopUp(event){
        event.preventDefault();
        setError(Validation(values));
      
    };

    function HandleChange(event){
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        });
    }
   
    return (
        <>
            <div className="headermainbar">
                <div className="headerbottombar1"></div>
                <div className="headerbottombar2"></div>
                <img src={Logo1} alt="s-logo" />
                <p>Justsmart Custom Homes</p>
                <a href="http://localhost:3000" className="home">Home</a>
                <a href="#" className="review" >{props.second}</a>
                <a href="#" className="available">{props.third}</a>
                <a href="#" className="completed">{props.fourth}</a>
                <form className="form">
                <label className='subscribe'>Subscribe for NewsLetter</label>
                <label className='email'>Email</label>
                <input type="text"  className="box" name="gmail" placeholder="Enter the email"value={values.gmail} onChange={HandleChange}/>
                {
                    error.gmail && <p className="error"style={{position:"absolute",width:"305px",color:"red",fontSize:"15px",left:"1020px",top:"50px"}}>{error.gmail}</p>
                }
                <button className="butt" onClick={PopUp}>ok</button>
                </form>
               


            </div>
        </>
    )
}

