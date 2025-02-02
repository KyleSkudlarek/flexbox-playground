import React from "react";
import styled from "styled-components";

// Parent container
const Parent = styled.div`
  width: 1200px; /* Adjust based on your calculation */
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: lightgray;
  position: relative;
  border: 2px solid black; /* Visualize parent border */

  /* Highlight padding */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black; /* Light orange to show padding */
    z-index: -1;
  }
`;

// Row container (holds 5 children)
const Row = styled.div`
  display: block; /* Ensures rows stay block-level */
  margin-bottom: 90px; /* Spacing between rows */
  outline: 3px dashed green; /* Show margin spacing */
`;

// Child divs (holes), now displayed inline-block
const Child = styled.div`
  width: 190px; /* Adjust this manually */
  height: 190px; /* Adjust this manually */
  background-color: blue;
  display: inline-block; /* Forces them to sit next to each other */
  margin-left: 20px;
  margin-right: 20px;
  outline: 3px solid yellow; /* Show margin spacing */
`;

const App = () => {
  return (
    <Parent>
      {/* 3 Rows */}
      {[...Array(3)].map((_, rowIndex) => (
        <Row key={rowIndex}>
          {/* 5 Children in each row (horizontally aligned) */}
          {[...Array(5)].map((_, index) => (
            <Child key={index} />
          ))}
        </Row>
      ))}
    </Parent>
  );
};

export default App;
