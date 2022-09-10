import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from './../responsive';


export const Navbar = () => {

    const Container = styled.div`
        height:60px;
        ${mobile({height:"50px"})};
   
        `;
    const Wrapper = styled.div`
        padding:10px 20px;
        display:flex;
        justify-content:space-between;
        ${mobile({paddding:"10px 0"})};
  `;
    const Left = styled.div`
        flex:1; 
        display:flex;
    
        align-items:center`
        ;
        const Language = styled.span`
        font-size:14px;
        cursor:pointer;
        `;

    const SearchContainer = styled.div`
        border:.5px solid grey;
        display:flex;
        justify-content:center;
        margin-left:25px;
        padding:3px ;
        ${mobile({marginLeft:"10px"})};

        `;
    const Input = styled.input`
        border:none;
        ${mobile({width:"80px"})};
      
        `;
    const Center = styled.div` flex:1;
        text-align:center`;
    const Logo = styled.h1`
        font-size:bold;
        ${mobile({display:"none"})};
        `
    const Right = styled.div` flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    cursor:pointer;
    ${mobile({margin:"0px"})};
    `;
    const Menuitem =styled.div`
    font-size:14px;
    ${mobile({fontSize:"12px"})};
    cursor:poiter;
    margin-right:25px
    `
    


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon  style={{color:"grey",fontSize:17}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>super.</Logo></Center>
                <Right>
                    <Menuitem>Register</Menuitem>
                    <Menuitem>Sign In</Menuitem>
                    <Badge badgeContent={7} color="success">
                   <ShoppingCartOutlinedIcon/>
                    </Badge>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar;