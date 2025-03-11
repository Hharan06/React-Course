import React from "react";

const Footer = ({length}) => {

  return (
    <footer>{length} {length>1 ? "items": "item"} in a list</footer>
  );
};

export default Footer;
