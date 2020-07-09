import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Message = () => {
    return (
        <Container>
            <h1>Runespeaker's Edda</h1>
            <hr />
            <h2>Coming Soon</h2>
            <a href='https://www.facebook.com/RunespeakersEdda/'><FontAwesomeIcon icon={faFacebookSquare} /></a>
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
        @media (max-width: 750px) {
            font-size: 4rem;
        }
        @media (max-width: 475px) {
            font-size: 2.5rem;
        }
        @media (max-width: 400px) {
            font-size: 2rem;
        }
        @media (max-width: 330px) {
            font-size: 1.8rem;
        }
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
    a {
        margin-top: 14px;
        font-size: 3rem;
        text-decoration: none;
        color: #fff;
        &:hover {
            /* color: #385898; */
            color: #ccc;
        }
    }
`

export default Message;