
import React from "react";
import "../App.css";

const Meteo = props => {
  return (
    <div className="container h-100">
      
      <form onSubmit={props.loadweather}>
        <h1 className="titre-1">Ma super app</h1>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="ville"
              name="ville"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="pays"
              name="pays"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">chercher</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Recherche ville et pays 
    </div>
  );
};

export default Meteo; 