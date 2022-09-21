import React,{useState} from 'react';
import Logo1 from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from './Validation.js';
// npm i react-scroll
import {Link} from 'react-scroll'





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
                <a href="/" className="home"  >
                     Home
                </a>
             
              <a  className="available" >
                    <Link activeClass="active"
                      to={props.thirdid}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}> {props.third}
                    </Link>
              </a>
              <a  className="review" >
                    <Link activeClass="active"
                      to={props.secondid}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}> {props.second}
                    </Link>
              </a>
              <a  className="completed" >
                    <Link activeClass="active"
                      to={props.fourthid}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}> {props.fourth}
                    </Link>
              </a>       
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

