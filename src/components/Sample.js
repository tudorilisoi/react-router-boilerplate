import React from "react";

export default props => {
  console.log(props);
  const redirect = () => {
    props.history.push("/");
  };
  return (
    <div>
      This is the {props.sampleProp} component route
      <button onClick={redirect}>Redirect to /</button>
    </div>
  );
};
