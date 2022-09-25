import styled from 'styled-components';
import  {Link} from 'react-router-dom';


const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;


`
const Image = styled.img`
 width: 100%;
 height:100%;
 object-fit: cover;
`;
const Info = styled.div`
width: 100%;
height: 100%;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    
   
`;
const Title = styled.h1`
font-size:60px;
font-weight: 600;
`;

const Button = styled.button` 
padding: 10px;
font-size:20px;
border:none;
background-color:white;
cursor: pointer;`





const Categoryitems = ({item}) => {
    return (
        <Container>
            <Link to="/productList">
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
            </Link>
        </Container>
    )
}

export default Categoryitems
