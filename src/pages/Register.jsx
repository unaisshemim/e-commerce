import React from 'react'

import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #7af19e;  
${mobile({height:"700px"})};



`;
const Wrapper = styled.div`
width:30%;
height: 70%;
padding: 20px;
display:flex;
border:1.5px solid teal;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
${mobile({height:"50%",
width:"70%",
margin:"10px 0",
})};


    
;
`;
const Title = styled.h1`
text-align:center;
font-weight:500;
${mobile({fontWeight:"400",
fontSize:"30px"})};
`;
const Form = styled.form`
width:100%;
display:flex;
flex-direction:column;
`;
const Input = styled.input`
font-size:15px;
padding:5px;
margin:5px 0`;
const Button = styled.button`
padding: 10px;
font-size: 15px;
font-weight: 600;
margin: 5px 0;
background-color: #cfc9c9;
`;
const Link = styled.a`
text-decoration: underline;
margin: 5px 0;
cursor: pointer;
font-weight: 500;
color: #2b2bdf;

`;
const SignLink = styled.a`

text-decoration:none`;
const Register = () => {
    return (
        <Container>
          <Wrapper>
              <Form >
                  <Title>Create New Account </Title>
                  <Input placeholder="name"/>
                  <Input placeholder="last name"/>
                  <Input placeholder="email"/>
                  <Input placeholder="password"/>
                  <Input placeholder="confirm password"/>
                  <Button>Sign In</Button>
                  <SignLink>Alredy have an account <Link>sign in</Link></SignLink>
                 

              </Form>
          </Wrapper>
        </Container>
    )
}

export default Register
