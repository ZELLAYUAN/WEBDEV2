import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: rgb(216, 167, 20);
    font-size: 42px;
    letter-spacing: 2px;
`
function App () {
  return (
    <>
      <Title> First Code </Title>
      <p>RANDOM PICTURE</p>
      <img src = "https://s2-techtudo.glbimg.com/CjMYXMeWN558R9OA7MTmUoKl25g=/0x0:1500x500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/U/0/AM86SwT7iK8yRB4M8FmQ/rdr2-rdr2-twitter.jpg" alt = "Random Picture"></img>
    </>
  );
}

export default App;