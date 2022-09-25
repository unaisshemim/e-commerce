import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { Add, ContactSupportOutlined, Remove } from "@material-ui/icons"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

import { publicRequest } from "../RequestMethod"
const Container = styled.div``;
const Wrapper = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}`;

const ImgContainer = styled.div`
flex:1;

`;
const Image = styled.img`

width: 100%;
height: 90vh;
object-fit:cover;
${mobile({ height: "50vh" })}`;
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;
const Title = styled.h1`
`;
const Desc = styled.p`
margin: 30px 0 ; 
font-weight: 400;
`;
const Prize = styled.span`
font-size: 25px;
font-weight: 500;
`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;`;

const Filter = styled.div`
margin: 5px 0;
display: flex;



align-items:center`;
const FilterTitle = styled.span`
font-weight: 500;
font-size: 20px;
margin-right: 5px;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
background-color: ${(props) => props.color};
border-radius: 50%;
margin: 0px 4px;

`;
const FilterSelect = styled.select`
padding:5px;
border:2px solid teal;

`;
const FilterSelectOption = styled.option`

`;
const AddContainer = styled.div`display:flex;
flex-direction:column;
align-items:center;
justify-content:center`;
const AmountContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom:15px`;
const Amount = styled.span`
padding:10px;
width:30px;
border-radius: 10px;
border:2px solid green;
display:flex;
justify-content:center;
align-items:center;
margin:5px 15px`;
const Button = styled.button`
padding:10px;
font-weight:500;
color:white;
background-color:teal`;
const Product = () => {
    const location=useLocation()
    const id =location.pathname.split("/")[3]
    const [product,setProduct]=useState({})
    const [quantity,setQuantity]=useState(1)
    const [color,setColor]=useState("")
    const [size,setSize]=useState("")

    useEffect(()=>{
       const getProduct=async()=>{
        try {
                const res=await publicRequest.get(`/product/${id}`)
                setProduct(res.data)
                
        } catch (error) {
            console.log(error)
        }
       }
       getProduct()
    },[])

        const handleQuantity=(value)=>{

            if(value === "dec" ){
                quantity > 1 && setQuantity(quantity-1) 
            }else if(value === "inc"){
                quantity < 5 && setQuantity(quantity +1)
            }
        }
        const handleColor=(value)=>{

           
            setColor(value)
        }
        const handleSize=(value)=>{
          setSize(value)
        }
    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc> Explicabo aliquid id numquam eos cupiditate ex sit iure
                        repellendus possimus excepturi tempora voluptatibus quidem, quaerat natus?</Desc>
                    <Prize>₹{product.price}</Prize>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle >color</FilterTitle>
                            {product.color?.map((value,key)=>{
                                return <FilterColor key={key} color={value} onClick={()=>{handleColor(value)}} />
                            })}
                           
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSelect onChange={(e)=>{handleSize(e.target.value)}}>
                                {product.size?.map((value,key)=>{
                                    return <FilterSelectOption key={key}>{value}</FilterSelectOption>
                                    
                                })}

                               
                            </FilterSelect>
                        </Filter>
                 
                        
                        </FilterContainer>
                        <AddContainer>
                        <AmountContainer>
                        <Remove onClick={()=>{handleQuantity("dec")}} onChange={(e)=>{e.preventDefault()}}/>
                        <Amount>{quantity}</Amount>
                        <Add  onClick={()=>{handleQuantity("inc")}} onChange={(e)=>{e.preventDefault()}}/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                        </AddContainer>
                        

                </InfoContainer>

            </Wrapper>


            <Newsletter />
            <Footer />
        </Container >
    )
}

export default Product
