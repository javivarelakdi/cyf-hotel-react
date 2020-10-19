import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="App-content">
      <div className="container">
        <div className="my-flex-row">
          <div className="card my-col-4">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="city"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://visitmanchester.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card my-col-4">
            <img
              src="https://picsum.photos/200/300?grayscale"
              alt="city"
              className="card-img-top"
            />
            <div className="card-body">
              <a
                href="https://peoplemakeglasgow.com/"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card my-col-4">
            <img
              src="https://picsum.photos/200/300/?blur"
              alt="city"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://visitlondon.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
