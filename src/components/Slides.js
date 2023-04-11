import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [restartVal, setRestartVal] = useState(true);
  const [prevVal, setPrevVal] = useState(false);
  const [nextVal, setNextVal] = useState(false);
  const restart = () => {
    setRestartVal(false);
    setPrevVal(false);
    setNextVal(true);
    setCurrentSlide(0);
  };
  const prev = () => {
    if (currentSlide < 2) {
      setPrevVal(false);
      setRestartVal(false);
    } else {
      setRestartVal(true);
      setPrevVal(true);
      setNextVal(true);
    }
    setCurrentSlide(currentSlide - 1);
  };
  const next = () => {
    if (currentSlide < slides.length - 2) {
      setPrevVal(true);
      setRestartVal(true);
      setNextVal(true);
    } else {
      setPrevVal(true);
      setRestartVal(true);
      setNextVal(false);
    }
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          onClick={restart}
          disabled={!restartVal}
          className="small outlined"
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          onClick={prev}
          disabled={!prevVal}
          className="small"
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={next}
          disabled={!nextVal}
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides && slides[currentSlide].title}</h1>
        <p data-testid="text">{slides && slides[currentSlide].text}</p>
      </div>
    </div>
  );
}
//moiz
export default Slides;
