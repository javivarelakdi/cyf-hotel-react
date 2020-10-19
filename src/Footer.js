import React from "react";

const Footer = props => {
  return (
    <footer className="App-footer my-full-width">
      <ul className="my-flex-row">
        {props.info.map((el, i) => {
          return (
            <li className="" key={i}>
              {el}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
