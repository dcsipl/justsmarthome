import React from 'react';
import { Link } from 'react-scroll'// npm i react-scroll
import Logo from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from './Validation.js';
import json from '../../JustsmartCustomHomes.json'
export default function Header(props) {
      return (
            <>
                  <div className="headermainbar">
                        <img src={Logo} alt="js-logo" />
                        <p>Justsmart Custom Homes</p>
                        <a href="/" className="home">Home</a>
                       
                        <a className="available">
                              <Link activeClass="active"
                                    to={props.secondid}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>{props.second}
                              </Link>
                        </a>
                        <a className="completed">
                              <Link activeClass="active"
                                    to={props.thirdid}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>{props.third}
                              </Link>
                        </a>
                        <a className="contactus" >
                              <Link activeClass="active"
                                    to={props.fourthid}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>{props.fourth}
                              </Link>
                        </a>
                        <a href="/gallery" className="gallery" >
                             {props.fifth}
                        </a>
                 <a className="menu"> {props.sixth}<br/> 
                 <ul>
          {json.JustSmartCustomHomes[0].businessAsso.map((associate) =>
            
             <li> <a href={associate.link} target="_blank">{associate.name}</a></li>
           )}
           </ul> </a> 
        
                        <Validation />
                  </div>
                  <div className="headerbottombar1"></div>
                  <div className="headerbottombar2"></div>
            </>
      )
}

