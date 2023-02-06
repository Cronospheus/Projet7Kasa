import React, { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/card";
import { GetAppartment } from "../../Services/fetchAppartments";
import { Appartment } from "../../Models/modelAppartment";

const AppartmentCard: FunctionComponent = () => {
  const [data, setData] = useState(Array<Appartment>);
  const getData = () => {
    GetAppartment().then(function (allAppartment: Array<Appartment>) {
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
