
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import { Navbar } from '../components/Navbar'
import Slider from "../components/Slider"
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Home;