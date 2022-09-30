import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
const Container = styled.div``;
const Wrapper = styled.div`

padding:20px`;
const Title = styled.h1`
text-align:center;
font-weight:450`;

const Top = styled.div`
display:flex;
justify-content:space-between;
align-items:center;`;


const TopButton = styled.button`
padding:10px;
font-weight:600;
font-size:15px;
margin-left:29px;
margin-right:29px;
border:${props => props.type === "filled" && "none"};
background-color:${props => props.type === "filled" ? "black" : "white"};
color:${props => props.type === "filled" && "white"};
cursor:pointer;
`;

const Toptexts = styled.div`
`;
const Toptext = styled.span`
font-size:20px;
font-weight:400;
margin-left:40px;
text-decoration:underline;
${mobile({display:"none"})}
`;

const Bottom = styled.div`
display:flex;
justify-content:space-around;
${mobile({flexDirection:"column"})}`;


const Info = styled.div`
flex: 3;
`;


const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection:"column",
})}
`;
const Hr = styled.hr`
background-color: #eee;
border:none;
height:2px
`;
const ProductDetail = styled.div`
display:flex;
flex: 1;

`;
const Image = styled.img`
width:200px;`;
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({fontSize:"15px"})}

`;
const ProductName = styled.div``;
const ProductId = styled.div`
`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${props => props.color};
`;
const ProductSize = styled.div``;
// const PrizeDetails = styled.div`
// flex: 1;
// display:flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// ${mobile({alignItems:"flex-end",
// marginRight:"70px",})}

// `;

const ProductAmountContainer = styled.div`
display:flex;

align-items: center;
justify-content: center;

`;
const ProductAmount = styled.span`
font-size:20px;
margin: 0 10px;
`;
const ProductPrize = styled.span`
font-size:30px;
font-weight:500;
margin:10px`;

const Summary = styled.div`
flex: 1;
border:.5px solid grey;
padding:10px;
height: 50vh;
border-radius:5px


`;
const SummaryTitle= styled.h2`
text-align:center;
font-size:25px`;
const SummaryItem = styled.div`
margin: 20px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "25px"};

`;
const SummaryItemText = styled.span``;

const SummaryItemPrize = styled.span`
font-weight:600`;
const Button = styled.button`
padding: 10px;
color: white;
background-color: black;
display: flex;
margin: auto;
font-weight: 700;
cursor: pointer;
`;



const Cart = () => {
    const cart=useSelector(state=>state.cart)
    
    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <Toptexts>
                        <Toptext>Shoping Bag(2) </Toptext>
                        <Toptext>Wishlist</Toptext>
                    </Toptexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product,key)=>{
                            return(
                                <Product key={key}>
                              <ProductDetail>
                              <Image src={product.img} />
                              <Details>
                                  <ProductName><b>Product:</b>{product.title}</ProductName>
                                  <ProductId><b>{product._id}</b></ProductId>
                                  <ProductColor color={product.color} />
                                  <ProductSize><b>Size:</b>{product.size}</ProductSize>
                              </Details>
                            </ProductDetail>
                              <ProductAmountContainer>
                                  <Remove />
                                  <ProductAmount>{product.quantity}</ProductAmount>
                                  <Add />
                              </ProductAmountContainer>
                              <ProductPrize>{product.price}</ProductPrize>
                        </Product>
                            )
                        })}
                        <Hr></Hr>
                        
                        <Hr></Hr>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Estimate Prize</SummaryItemText>
                            <SummaryItemPrize>{cart.total}</SummaryItemPrize>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping cost </SummaryItemText>
                            <SummaryItemPrize>100</SummaryItemPrize>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount On Shipping</SummaryItemText>
                            <SummaryItemPrize>100</SummaryItemPrize>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrize>{cart.total}</SummaryItemPrize>
                        </SummaryItem>
                            <Button>CHECKOUT</Button>
                    </Summary>
                </Bottom>
            </Wrapper><Footer />




        </Container >
    )
}

export default Cart
