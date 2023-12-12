import React from 'react' 
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react' 


const NavBar = () => {
    



  return (
    <Menu inverted fixed='top' >
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/images/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Deneme Tahtası
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/profile' name='profile' />
        <Menu.Item as={NavLink} exact to='/meydanokuma' name='Meydan Okuma' />


        {/* 
        {authenticated && 
        <Menu.Item as={NavLink} to='/createEvent'>
        <Button positive inverted content='Create Event' />
        </Menu.Item>
        } 
        */}

        {/* {authenticated ? <SignedInMenu /> : <SignedOutMenu />} */}
        
        
      </Container>
    </Menu>
  )
}

export default NavBar
