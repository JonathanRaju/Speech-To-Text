import React from "react";

const Child = ({ transcript, message }) => {
  console.log(transcript, message);
  return (
    <>
      <p>{transcript}</p>
      <p>{message}</p>
    </>
  );
};

export default Child;
