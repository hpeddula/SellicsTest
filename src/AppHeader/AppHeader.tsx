import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;
function AppHeader() {
    return (
        <Wrapper>
            <Title>
                Image Approval Application
            </Title>
        </Wrapper>
    )
}

export default AppHeader
