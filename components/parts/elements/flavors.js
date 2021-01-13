import React from "react";

const Flavors = (props) => {
  const DisplayFlavors = (props) => {
    const { randomFlavor } = props;

    if (randomFlavor.length > 0) {
      return (
        <div className="delay3">
          <h2>{randomFlavor}</h2>
        </div>
      );
    } else {
      return <p>No Flavor Found</p>;
    }
  };

  return <>{DisplayFlavors(props)}</>;
};

export default Flavors;
