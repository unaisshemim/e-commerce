
import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from './../responsive'


const Container= styled.div`
height:400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
background-color: #f8cdda;
position: relative;

`
const Title= styled.h1`
font-size:65px;
font-weight:600;
margin:20px 0;
   ${mobile({fontSize:"50px"})};
`;

const Desc= styled.div`
font-size:20px;
font-weight:500;
margin-bottom:20px ;
   ${mobile({textAlign:"center",
   fontWeight:400
   })};`;

const Inputcontainer= styled.div`
display: flex;
justify-content: center;
border: 1px solid grey;

`;
const Input= styled.input`
padding:8px;
width:30vw;
border:none;
`;
const Button= styled.button`
width:60px;
display:flex;
justify-content:center;
align-items:center;
background-color: #279797;
cursor:pointer;
border:none
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>News Letter</Title>
            <Desc>Get timely update from your favorite products...</Desc>
            <Inputcontainer>
            <Input placeholder="your email"/>
            <Button>
            <Send style={{width:15}}/>
            </Button>
            </Inputcontainer>
        </Container>
    )
}

export default Newsletter
