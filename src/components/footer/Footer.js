import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by 
          &nbsp;<a href="https://mohiuddin-mazumder.web.app/" className="text-light" target="_blank" rel="noopener noreferrer">Mohiuddin Mazumder</a>
        </p>
      </Fade>
    </div>
  );
}
