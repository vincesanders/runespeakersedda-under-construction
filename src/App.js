import React from 'react';
import styled from 'styled-components';
import treeImage from './assets/IMG_2700.JPG';

function App() {
  return (
    <Container>
      <div className='overlay' />
      <img alt='An image of a large tree.' src={treeImage} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: #000;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  img {
      /* height: 100%; */
      width: 80%;
      margin: 0;
      padding: 0;
    }
`

export default App;
