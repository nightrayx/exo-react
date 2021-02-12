import React from "react";
import "../App.css";

const Ville = props => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.villename}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

          {/* montre la temperature maximun et minimun */}
        {temperatureminmax(props.temp_min, props.temp_max)}
        

{/* decrit le temps si le ciel est degagé ensolleilé .. */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Ville;
//fonction qui donne la temperature maximun et min
function temperatureminmax(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}