import React from 'react';
import { Link } from 'react-scroll'// npm i react-scroll
import Logo from '../../Pictures/CommonImages/Logo.jpeg';
import Validation from './Validation.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import House from "../../Pictures/CommunityDetailsImages/construction-1.jpg";
import { IoMdClose } from 'react-icons/io'
import json from "../../JustsmartCustomHomes.json"
import { Button } from '@mui/material';

const styles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700,
      height: 650,
      bgcolor: 'lightgray',
      border: "none",
      boxShadow: 44,
};



export default function Header(props) {
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      return (
            <>
                  <div className="headermainbar">
                        <img src={Logo} alt="js-logo" />
                        <p>Justsmart Custom Homes</p>
                        <div className='anchortags'>
                              <a href="/" className="home">Home</a>

                              <Button className="available">
                                    <Link activeClass="active"
                                          to={props.secondid}
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={500}>{props.second}
                                    </Link>
                              </Button>
                              <Button className="completed">
                                    <Link activeClass="active"
                                          to={props.thirdid}
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={500}>{props.third}
                                    </Link>
                              </Button>
                              <Button className="contactus" onClick={handleOpen}>{props.fourth}
                                    {/* <Link activeClass="active"
                                    to={props.fourthid}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>{props.fourth}
                              </Link> */}
                              </Button>
                              <a href="/Gallery" className="gallery" >
                                    {props.fifth}
                              </a>
                        </div>
                        <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                        >
                              <Box sx={styles}>
                                    <div className='closeButton' onClick={handleClose}><IoMdClose size={25} /></div>


                                    <Card className="card">
                                          <div className='cardheader'>
                                                <img src={Logo} className="cardlogo" alt="cardlogo" />


                                                <p className='cardtitle'>JustSmart Custom Homes<br />
                                                      <span> Edmond, OK</span></p>
                                          </div>

                                          <CardMedia
                                                className='homeimg'
                                                component="img"
                                                image={House}

                                          />

                                          <CardContent style={{ lineHeight: "40px" }}  >
                                                <div className="cardcontentcontainer">
                                                      <Typography style={{ color: "black", fontWeight: 800, fontFamily: "georgia", marginLeft: "180px" }}>
                                                            CONTACT DETAILS :
                                                      </Typography>
                                                      {json.contactus.map((contact) =>
                                                            <div>
                                                                  <Typography style={{ lineHeight: "40px", color: "#012060", fontWeight: 800, fontFamily: "georgia", fontSize: "15px",marginLeft: "5px" }}>
                                                                        {contact.name1} - <span style={{fontFamily:"Playfair Display",fontSize:"16px"}}>{contact.phone1}</span>
                                                                        <br />
                                                                        {contact.email1}
                                                                  </Typography>
                                                                  <Typography style={{ lineHeight: "40px", color: "#012060", fontWeight: 800, fontFamily: "georgia", marginLeft: "305px", marginTop: "-80px", fontSize: "15px" }}>
                                                                        {contact.name2} - <span style={{fontFamily:"Playfair Display",fontSize:"16px",marginLeft:"30px"}}>{contact.phone1}</span>
                                                                        <br />
                                                                        {contact.email2}
                                                                  </Typography></div>)}
                                                </div>
                                                <Typography style={{ color: "black", fontWeight: 800, fontFamily: "qwigley", fontSize: "50px", marginLeft: "100px" }}>
                                                      Smart Step, Every Step
                                                </Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                        </Modal>

                        <Validation />
                  </div>
                  <div className="headerbottombar1"></div>
                  <div className="headerbottombar2"></div>
            </>
      )
}

