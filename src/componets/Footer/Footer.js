import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>
        <small>
          Copyrights &copy; {year} All rights reserved by{" "}
          <b className="common-color">FarnitureBari</b>{" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
