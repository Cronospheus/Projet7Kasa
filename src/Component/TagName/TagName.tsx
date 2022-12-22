import React, { FunctionComponent, useState, useEffect } from "react";

type Props = {
  tags: Array<string>;
};
const TagName: FunctionComponent<Props> = (props) => {
  const [tag, setTag] = useState(props.tags);

  return (
    <div className="nameContainer">
      {tag.map((props) => {
        return (
          <div className="tagContainer" key={props}>
            {<p className="tagName">{props}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default TagName;
