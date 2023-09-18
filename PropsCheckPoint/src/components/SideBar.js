import React from 'react'
import './SideBar.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        <>
    <div id="mySidenav" className="sidenav" >

        <div className="openbtn" style={{fontsize:'30',cursor:'pointer'}} onClick={handleShow} ><img className="btn" src= "http://cliparting.com/wp-content/uploads/2016/05/Free-football-clip-art-images-clipart-image.png"/></div>

      <Offcanvas show={show}onHide={handleClose} className="container">

        <Offcanvas.Header closeButton > 
          <Offcanvas.Title className='title'>Football Mania</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <a href="">Top Leagues</a>
        <a href="#">Top Players</a> /*without a link real*/
        <a href="#">Contact</a>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </> )
}

export default SideBar