import React from "react";

const person = props => {
  const { name, age } = props.person;
  return (
    <div>
      <p>
        Hi! I am {name} and {age} year old! <br />
      </p>
    </div>
  );
};

export default person;
