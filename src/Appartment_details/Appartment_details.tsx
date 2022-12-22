import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollapseItem from "../Component/Collapse/Collapse";
import Pictures from "../Component/Appartment_details_picture/Appartment_details_picture";
import TagName from "../Component/TagName/TagName";
import Stars from "../Component/Rating/Rating";

interface Appartment {
  id: string;
  title: string;
  cover: string;
  pictures: Array<string>;
  description: string;
  host: ApartmentHost;
  rating: string;
  location: string;
  equipments: Array<string>;
  tags: Array<string>;
}

interface ApartmentHost {
  name: string;
  picture: string;
}

const AppartmentDetails: FunctionComponent = () => {
  const [data, setData] = useState<Appartment>();
  const { id } = useParams();

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
      .then(function (allAppartment: Array<Appartment>) {
        const AppartmentFind = allAppartment.find((item) => item.id == id);
        if (AppartmentFind != undefined) {
          setData(AppartmentFind);
        } else {
          window.location.href = "/";
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="appartmentDetailPicture">
        {data != undefined && (
          <Pictures pictures={data.pictures} title={data.title} key={data.id} />
        )}
      </div>

      <div className="appartmentDetails">
        <div className="appartmentInfo">
          <div className="appartmentTitle text">{data?.title}</div>
          <div className="location text">{data?.location}</div>
          {data != undefined && <TagName tags={data.tags} />}
        </div>
        <div className="HostRating">
          {data != undefined && <Stars rating={data.rating} />}

          <div className="Host">
            <div className="Name">{data?.host.name}</div>
            <img
              className="HostPicture"
              src={data?.host.picture}
              alt={data?.host.name}
            />
          </div>
        </div>
      </div>
      <div className="CollapseAppartmentDetail">
        {data != undefined && (
          <CollapseItem
            titleCollapse="Description"
            textCollapse={data?.description}
          />
        )}
        {data != undefined && (
          <CollapseItem
            titleCollapse="Équipements"
            equipments={data?.equipments}
          />
        )}
      </div>

      {data == undefined && <h1>Chargement de la page</h1>}
    </>
  );
};

export default AppartmentDetails;
