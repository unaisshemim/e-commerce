import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data'
import { useState } from 'react';
import {mobile} from './../responsive'

const Container = styled.div`
width:100%;
height: 100vh;
background-color: #f5f3f3; 
display: flex;
position: relative;   
overflow:hidden;
${mobile({display:"none"})};
`
const Arrow = styled.div`
width: 40px;
height: 40px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute ;
top:0;
bottom: 0;  
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin:auto;
cursor: pointer;
opacity: .5;
z-index: 2;

`;
const Wrapper=styled.div`
height:100vh;
display :flex;
transform: translateX(${props => props.slide * -100}vw);
transition: all 1s ease;





`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};

`
const ImageContainer= styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
left:40px

`
const Image = styled.img`   
height: 80%;
`
const TittleContainer = styled.div`  
flex:1;   
padding:50px;


`
const Title= styled.h1` 
font-size:70px;
font-weight:500;
margin: 20px 0;
`

const Desc= styled.p`
font-size: 20px;
letter-spacing: 3px;
font-weight: 600;
`
const Button= styled.button`
padding:7px;
background-color: transparent;
margin: 10px 0;
`
const Slider = () => { 
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick = (direction)=> {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
        }
    }
    
    return (
        <Container  >
            <Arrow direction="left" onClick={()=>{
                handleClick ("left")
            }}>
                <ArrowLeftIcon />
            </Arrow>
                <Wrapper slide={slideIndex}>
                {sliderItems.map(item =>(
                    <Slide bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img} key={item.id} />
                    </ImageContainer>
                    <TittleContainer>
                        <Title>{item.title}</Title>
                        <Desc> {item.desc} </Desc>
                        <Button>Shop Now</Button>
                    </TittleContainer>
                    </Slide>                                
                     ))}
                </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")
            }>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider

