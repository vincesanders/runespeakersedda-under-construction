import React from 'react';
import styled from 'styled-components';

const Message = () => {
    return (
        <Container>
            <h1>Runespeaker's Edda</h1>
            <hr />
            <h2>Coming Soon</h2>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1;
    font-family: 'Oswald', sans-serif;
    h1 {
        background: #000;
        padding: 5px;
        margin-bottom: 20px;
        font-size: 5rem;
        text-transform: uppercase;
        letter-spacing: 4px;
    }
    hr {
        border-width: 2px;
        width: 50px;
    }
    h2 {
        margin-top: 20px;
        font-size: 2rem;
        letter-spacing: 2px;
    }
`

export default Message;