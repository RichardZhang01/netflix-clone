import React from "react";
import "./Footer.css";

import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <p>Netflix Clone by Richard Zhang</p>
      <a
        href="https://github.com/RichardZhang01/netflix-clone"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
}

export default Footer;
