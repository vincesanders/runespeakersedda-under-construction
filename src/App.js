import React from 'react';
import styled from 'styled-components';
import Message from './components/Message';
import treeImage from './assets/IMG_2700.JPG';

function App() {
  //TODO: add Facebook link at bottom with Font Awesome icon.
  return (
    <Container>
      <div className='overlay' />
      <Message />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url(${treeImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 650px) {
    background-position: center;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
`

export default App;
