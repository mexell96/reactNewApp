import React from "react";
import Site from "./Site";

function Lorem(props) {
  console.log(props);

  const myCustomProps = { ...props, text: "new props" };
  console.log(myCustomProps);

  const style = { color: "green", fontSize: "24px" };

  return (
    <React.Fragment>
      <div>Lorem ipsum dolor sit.</div>
      <h1 style={style}>
        <p>{myCustomProps.text}</p>
      </h1>
      <Site name="Google" />
      <Site name="Yandex" />
      <Site name="VK" />
    </React.Fragment>
  );
}

export default Lorem;
