import Cart from "./pages/Cart";
import Home  from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Stripe from './Stripe'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  const user=useSelector(state=>state.user.currentUser)
  console.log(user)
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={user ?<Home/>:<Register />} />
      <Route path="/login" element={user ?<Home/>:<Login />} />
      <Route path="/productList/product/:id" element={<Product/>} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/payment" element={<Stripe />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
