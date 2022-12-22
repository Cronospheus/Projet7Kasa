import React, { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  titleCollapse: string;
  textCollapse?: string;
  equipments?: Array<string>;
};

const CollapseItem: FunctionComponent<Props> = (props) => {
  const [collapse, setcollapse] = useState(false);
  const [toggle, setToggle] = useState(faChevronDown);
  const [equipment, setEquipment] = useState(props.equipments);

  const toggleOpen = () => {
    setcollapse(!collapse);
    if (!collapse) {
      setToggle(faChevronUp);
    } else {
      setToggle(faChevronDown);
    }
  };

  useEffect(() => {
    setcollapse(collapse);
  });

  const displayProps = () => {
    if (typeof equipment === "object") {
      return (
        <ul className="ListEquipment">
          {equipment.map((item, index) => (
            <li className="Equipment" key={index}>
              {item}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p className="textCollapse">{props.textCollapse}</p>;
    }
  };

  return (
    <div className="Collapse">
      <button className="button" onClick={toggleOpen}>
        <div className="toggleButton">
          <p className="titleCollapse">{props.titleCollapse}</p>
        </div>
        <div className="iconCollapse">
          <span>
            <FontAwesomeIcon icon={toggle} />
          </span>
        </div>
      </button>

      {collapse && <div className="CollapseOpen">{displayProps()}</div>}
    </div>
  );
};

export default CollapseItem;
