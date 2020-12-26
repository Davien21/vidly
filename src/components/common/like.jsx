import React from "react";

const Like = (props) => {
  let classes = "pointer fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <React.Fragment>
      <i
        onClick={() => props.onClick()}
        className={classes}
        aria-hidden="true"
      ></i>
    </React.Fragment>
  );
};

export default Like;
