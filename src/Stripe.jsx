import {useState} from 'react'
import axios from 'axios'
import Razorpay from 'razorpay';


const Stripe =()=>{
const [product,setProduct]=useState({
  name:'puma T-shirt',
  amount:2000
})

const initPayment=(data)=>{
  
const options={
  key:"rzp_test_wegXPC7zwWGe07",
  amount:product.amount,
  currency:"INR",
  name:product.name,
  description:'this is t shirt',
  order_id:data.id,
  handler:async(response)=>{
    try {
      const orderUrl="http://localhost:3001/api/checkout/order"
      const {data}=await axios.post(orderUrl,response)
      console.log(data)
    } catch (error) {
     console.log(error) 
    }
  },
  theme:{
    color:'#3399cc'
  },
  }
const rzp1 = new window.Razorpay(options);
rzp1.open();
}

const handleRequest= async()=>{
  console.log("run")
    try {
      const orderUrl="http://localhost:3001/api/checkout/order"
      const {data}= await axios.post(
      orderUrl,
        {
          amount:2000,
          
        }
      )
      initPayment(data.data)
      console.log("succed")
      console.log(data)
      
      
      
    } catch (error) {
      console.log(error)
    }


   
}


  return (
    <div>
      <button onClick={handleRequest}>Pay</button>
    </div>
  )
}

export default Stripe