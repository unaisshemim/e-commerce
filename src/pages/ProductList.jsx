import styled from 'styled-components'
import Navbar from './../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from "./../responsive"
import {useLocation} from 'react-router-dom'
import {useState} from 'react'

const Container = styled.div``;
const Filter = styled.div``;
const Title = styled.h1`
margin-left:20px`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
${mobile({padding:"5px"})}

`;
const FilterText = styled.span`
font-size: 18px;
font-weight: 500;
${mobile({fontSize:"14px"})}
`;
const Select = styled.select`
padding: 10px;
margin-left: 20px;
${mobile({padding:"5px",
marginLeft:"10px",
fontSize:"12px",
fontWeight:"500"})}
`;
const Option = styled.option`
`;

const ProductList = () => {
    const location = useLocation();
    console.log(location)
    const cat =location.pathname.split('/')[2]
    console.log(cat)
    const [filter,setFilter]=useState({})
    const [sort,setSort]=useState("featured")

    const handleChange=(e)=>{
        const value=e.target.value
        setFilter({
            ...filter,
            [e.target.name]:value
        })
        
    };
    console.log(filter)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dress</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                    Filter:
                    </FilterText>
                        <Select onChange={handleChange} name="color">
                            <Option disabled default>color</Option>
                            <Option>green</Option>
                            <Option>red</Option>
                            <Option>blue</Option>
                            <Option>yellow</Option>
                            <Option>orange</Option>
                            <Option>black</Option>
                            <Option>brown</Option>
                        </Select>
                        <Select  onChange={handleChange} name="size">
                        
                            <Option disabled defalut>size</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XLL</Option>

                        </Select>
                </Filter>
                <Filter>
                    <FilterText>
                    Sort by:
                    </FilterText>
                    <Select  onChange={e=>setSort(e.target.value)}>
                            <Option value="featured" default>Featured</Option>
                            <Option value="asc">Low to High</Option>
                            <Option value="des">High to Low</Option>
                            <Option value='newest'>Newest</Option>
                         
                        </Select>
                </Filter>

            </FilterContainer>
            <Products  filter={filter} cat={cat} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
