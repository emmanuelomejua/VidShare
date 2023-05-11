import { RiAccountCircleFill, RiSearch2Line } from 'react-icons/ri'
import styled from 'styled-components'

const Container = styled.section`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 50px;
   
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 5px 15px;
    justify-content: flex-end;
    position: relative;
`

const Search = styled.div`
    position: absolute;
    width: 40%;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    color:  lightgray;
    border-radius: 3px;
   
`

const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px;
`

const Button = styled.button`
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
            <Input placeholder='Search...'/>
            <RiSearch2Line style={{marginRight: '8px'}}/>
        </Search>
        <Button><RiAccountCircleFill/> SIGN IN</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
