
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #0e9696;
${mobile({height:"100vh",
alignItems:"center",
justifyContent:"center"})}



`;
const Wrapper = styled.div`
width:30%;
height: 50%;
padding: 20px;
display:flex;
border:1.5px solid teal;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
${mobile ({width:"60%",
position:"relative",top:"-80px"

})}

    
;
`;
const Title = styled.h1`
text-align:center`;
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
font-weight: 350;

`;

const Login = () => {
    return (
        <Container>
          <Wrapper>
              <Form >
                  <Title>Sign In </Title>
                  <Input placeholder="email"/>
                  <Input placeholder="password"/>
                  <Button>Sign In</Button>
                  <Link>Create new account</Link>
                  <Link>Forgot password</Link>

              </Form>
          </Wrapper>
        </Container>
    )
}

export default Login
