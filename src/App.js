import React from "react";

const element1 = <h1>Hello world</h1>;

function Lorem() {
  const style = { color: "green", fontSize: "24px" };

  return (
    <p style={style}>
      {element1}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, sit?
    </p>
  );
}

export default Lorem;
