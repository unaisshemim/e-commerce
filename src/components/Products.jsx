import {popularProducts} from '../data'
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
    const [filteredProducts,setFilteredProducts]=useState([])

    useEffect(()=>{
        const getProducts=async()=>{
            try {
                const res=await axios.get(cat ?"https://ecomerrceunais.herokuapp.com/api/products":"https://ecomerrceunais.herokuapp.com/api/products")
                setProducts(res.data)
                
                
                            
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    },[cat])
    console.log(products)
    console.log(filter)
    useEffect(()=>{

       
    },[filter,products])
    
 
     console.log(filteredProducts)
    
    return (
        <Container>
            {filteredProducts.map(item=>(
               <Product item={item} key={item._id}/>
            ))}
        </Container>
    )
}

export default Products
