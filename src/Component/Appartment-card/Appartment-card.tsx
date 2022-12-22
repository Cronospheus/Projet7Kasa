import React, { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/card";

const AppartmentCard: FunctionComponent = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (allAppartment) {
        setData(allAppartment);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      {data &&
        data.length > 0 &&
        data.map(({ id, cover, title }) => (
          <Link to={`/apartments/${id}`} key={id}>
            <Card cover={cover} title={title} />
          </Link>
        ))}
    </div>
  );
};
export default AppartmentCard;
