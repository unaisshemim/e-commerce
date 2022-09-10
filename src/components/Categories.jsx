import styled from 'styled-components';
import { categories } from '../data';
import Categoryitems from './Categoryitems';
import {mobile} from './../responsive'


const Container = styled.div`
color:blue;
display:flex;
justify-content:space-between;
padding:20px;
${mobile({flexDirection:"column"})};`
const Categories = () => {

    return (
        <Container >
            {categories.map((item) => (   
                <Categoryitems item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
