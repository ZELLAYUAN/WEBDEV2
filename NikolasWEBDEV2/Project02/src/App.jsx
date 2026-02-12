import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #ffb732;
  font-size: 32pt;
  padding: 32px 0;
  text-align: center;
`
const Area = styled.div`
  background: #ff4a4a;
  border-radius: 16px;
  padding: 16px;
`
const Content = styled.div `
  background: #ffed4a;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
`

function App() {
  return(
    <>
      <Title> A Dive into React </Title>
      <Area> 
        <Content> Nikolas Zella</Content>
      </Area>
    </>
  );
}

export default App;