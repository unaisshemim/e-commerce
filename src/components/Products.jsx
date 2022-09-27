// import {popularProducts} from '../data'
import styled from "styled-components";
import Product from "./Product"
import {useState,useEffect} from 'react'
import axios from 'axios'
const Container = styled.div
` padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;`

const Products = ({sort,filter,cat}) => {
    const [products,setProducts]=useState([])
    // const [filteredProducts,setFilteredProducts]=useState([])
    
    useEffect(()=>{
        const getProducts=async()=>{
            try {
                const res=await axios.get("http://localhost:5001/product")
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
       
    },[])

    // useEffect(()=>{
        
    // },[filter,products])
    
 
    //  console.log(filteredProducts)
    
    return (
        <Container>
            {products.map(item=>(
               <Product item={item} key={item._id}/>
            ))}
        </Container>
    )
}

export default Products
