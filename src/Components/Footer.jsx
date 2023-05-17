import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { GrYoutube } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';


class Footer extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <br />
        <div style={{display:"inline"}}>
        <i style={{ fontSize: "20px", color: "white", marginRight: "20px" }}>  <FaFacebook /></i>
        <i style={{ fontSize: "20px", color: "white", marginRight: "20px" }}>  <BsWhatsapp /></i>
        <i style={{ fontSize: "20px", color: "white", marginRight: "20px" }}>  <GrInstagram /></i>
        <i style={{ fontSize: "25px", color: "white", marginRight: "20px" }}>  <GrYoutube /> </i>
        <i style={{ fontSize: "20px", color: "white", marginRight: "20px" }}>  < BsTwitter /> </i>
        </div>
        <h5 style={{color:"white" , display:"inline" , textAlign:"left"}}>All Copy Rights Reserved 2023 |KBH SHOES COMPANY|</h5>
      </div>
    )
  }
}

export default Footer
