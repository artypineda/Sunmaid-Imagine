import React from "react";

const Jobs = (props) => {
  const DisplayJobs = (props) => {
    const { randomJobSelect } = props;

    if (randomJobSelect.length > 0) {
      return (
        <div className="delay1">
          <h2>{randomJobSelect}</h2>
        </div>
      );
    } else {
      return "No Jobs Found";
    }
  };

  return <>{DisplayJobs(props)}</>;
};

export default Jobs;
