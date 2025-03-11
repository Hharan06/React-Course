import React from "react";

const Footer = ({length}) => {
  const year = new Date().getFullYear(); // 

  return (
    <footer>{length} {length>1 ? "items": "item"} in a list</footer> // 
  );
};

export default Footer;
