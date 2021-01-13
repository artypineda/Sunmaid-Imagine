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
      return "No Jobs Found";
    }
  };

  return <>{DisplayWords(props)}</>;
};

export default Words;
