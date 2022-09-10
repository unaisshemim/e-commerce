import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React from 'react'
import styled from 'styled-components';
import RoomIcon from '@mui/icons-material/Room';
import { MailOutline, Phone } from '@material-ui/icons';
import {mobile } from './../responsive'

const Container = styled.div` 
height: 50vh;
display:flex;
${mobile({
height:"70vh",
flexDirection:"column"
})};

`;
const Left = styled.div`
flex:1;
display:flex;
margin-top:30px;
flex-direction:column;
   ${mobile({flex:"0"})};

`;

const Logo = styled.h1`
position:relative;
margin: 0 auto;
font-size:40px;
${mobile({fontSize:"30px"})};`
;
const Desc = styled.p`
font-size:15px;
font-weight: 550;
text-align: center;
`
const Socialcontainer = styled.div`
display:flex;
justify-content: center;

margin-top: 15px;`;
const Socialicon = styled.div`
padding:10px;
color:white;
background-color: #${props => props.color};
width:20px;
height:20px;
border-radius: 50%;
display:flex;
justify-content: center;
align-items: center;
margin:0 5px ;
${mobile({padding:"5px"})};
`;


const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})};



`;
const Title = styled.h1`
margin-top:20px;
font-weight: 600;
${mobile({fontSize:"30px",
textAlign:"center"})};
`;
const Item = styled.ul`
font-size:18px;
display: flex;
flex-wrap: wrap;
margin:0;
padding: 0;
display: flex;
list-style:none;





`;
const Itemlist = styled.li`

width:50%;
margin-bottom:5px;
font-weight:500;
cursor: pointer;`;

const Right = styled.div`
flex:1;
${mobile({flex:"0",
padding:"10px"})};

padding:20px`;
const ContactItem = styled.div`
font-size: 18px;
font-weight: 500;
margin:10px 0 ;

display: flex;
align-items: center;
${mobile({fontSize:"15px",
margin:"8px 60px"
})};

`

const Payment = styled.img`
width:50%;
margin-top:10px;
${mobile({margin:"5px 70px"})};
`;


const Footer = () => {
    const style ={
        marginRight :"10px"
    }
    return (
        <Container>
            <Left>
                <Logo>UNAIZ</Logo>
                <Desc>Follow on...</Desc>
                <Socialcontainer>
                    <Socialicon color="3B5999"><FacebookIcon /></Socialicon>
                    <Socialicon
                        color="E4405F"><InstagramIcon /></Socialicon>
                    <Socialicon
                        color="55ACEE"><TwitterIcon /></Socialicon>
                    <Socialicon
                        color="E60023"><PinterestIcon /></Socialicon>
                </Socialcontainer>

            </Left>
            <Center>
                <Title>Useful Links</Title>
                <Item>
                    <Itemlist>Home</Itemlist>
                    <Itemlist>Man Fashion</Itemlist>
                    <Itemlist>Accesories</Itemlist>
                    <Itemlist>Order Tracking</Itemlist>
                    <Itemlist>Wishlist</Itemlist>
                    <Itemlist>Cart</Itemlist>
                    <Itemlist>Woment Fashion</Itemlist>
                    <Itemlist>My Account</Itemlist>
                    <Itemlist>Terms</Itemlist>
              
               

                </Item>
            </Center>
            <Right>
            <Title>Contact</Title>
            <ContactItem><RoomIcon style={style}/>  Gandhinagar , 2nd street</ContactItem>
            <ContactItem><Phone style={style}/>+916282127071</ContactItem>
            <ContactItem><MailOutline style={style}/>unaisshemim@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
   
}

export default Footer
