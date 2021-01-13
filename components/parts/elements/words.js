import React from "react";

const Words = (props) => {
  const DisplayWords = (props) => {
    const { randomWord } = props;

    if (randomWord.length > 0) {
      return (
        <div className="delay2">
          <h2>{randomWord}</h2>
        </div>
      );
    } else {
      return <p>No Word Found</p>;
    }
  };

  return <>{DisplayWords(props)}</>;
};

export default Words;
