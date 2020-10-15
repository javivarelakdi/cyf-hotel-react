import React from "react";

const Heading = () => {
  return (
    <header className="App-header my-flex-row">
      <span className="my-col-6 my-pa-1 ">CYF Hotel</span>
      <span className="my-col-6 my-flex-row my-jc-end my-pr-1 my-pt-small">
        <img
          className="App-header__image"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="hotel"
        />
      </span>
    </header>
  );
};

export default Heading;
