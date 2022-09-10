import  styled from 'styled-components'; 


const Announcement = () => {

    const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    `
    return (
        <Container >
         super Deal! started order above 1000 free delivery! 
        </Container>
    )
}

export default Announcement
