import { useState } from "react";
import { sculptureList } from "./data";

export default function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const totalSculptures = sculptureList.length;

  const handleNextClick = () => {
    setIndex(index + 1);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handlePreviousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePreviousClick} disabled={index === 0}>
        Previous
      </button>

      <button
        onClick={handleNextClick}
        disabled={index === totalSculptures - 1}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}

      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
