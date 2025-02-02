import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.div`
  width: 1240px; /* Fixed total width (Parent + Margins) */
  margin: 0 auto; /* Centers it in the viewport */
  background-color: white; /* Optional for visualization */
`;

const Parent = styled.div`
  width: 1200px; /* Fixed content width */
  height: 810px;
  background-color: lightgray;
  border: 1px solid black;
  box-sizing: border-box;
  margin-left: 20px; /* Fixed left margin */
  margin-right: 20px; /* Fixed right margin */
`;
// Row container (Full width, fixed height)
const Row = styled.div`
  width: 100%; /* Make rows take full parent width */
  height: 270px; /* Set row height */
  background-color: blue; /* Just for visualization */
  border: 1px solid black;
  box-sizing: border-box;
`;

const Hole = styled.div`
  width: 190px; /* Make rows take full parent width */
  height: 190px; /* Set row height */
  background-color: green; /* Just for visualization */
  border: 1px solid black;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top; /* Prevents unwanted vertical gaps */
`;

const App = () => {
  return (
    <BodyWrapper>
      <Parent>
        <Row>
          <Hole />
          <Hole />
          <Hole />
          <Hole />
          <Hole />
        </Row>
        <Row>
          <Hole />
          <Hole />
          <Hole />
          <Hole />
          <Hole />
        </Row>
        <Row>
          <Hole />
          <Hole />
          <Hole />
          <Hole />
          <Hole />
        </Row>
      </Parent>
    </BodyWrapper>
  );
};

export default App;
