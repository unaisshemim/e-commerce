import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from './../responsive'
const Info = styled.div`
    width: 100%;
    height:100%;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    opacity:0;
    transition: all .5s ease;
    cursor: pointer;
 

`;

const Container = styled.div
`flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
justify-content: center;
align-items:center;
background-color: white;
position:relative;
   ${mobile({height:"80%"})};



&:hover ${Info}{
    opacity:1;
}
`;
const Circle = styled.div`
 width: 200px;
  height: 200px;



`;
const Image = styled.img`
 height: 100%;
 z-index: 2;
 



`;

const Icon = styled.div`

width:40px;
height:40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin:5px;
transition: all .8s ease;

&:hover{
    background-color: #c7daf0;
    transform: scale(1.2);
}

`;


const Products = ( {item}) => {

    return (
        <Container>
        <Circle>
            <Image src={item.img}/>
        
            <Info>
                <Icon><FavoriteBorderOutlined/></Icon>
                <Icon><SearchOutlined/></Icon>
                <Icon><ShoppingCartOutlined/></Icon>
            </Info>
        </Circle>

        </Container>
    )
}

export default Products