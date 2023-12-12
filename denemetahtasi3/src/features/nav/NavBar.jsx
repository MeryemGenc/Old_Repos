import React from 'react' 
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react' 
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

const NavBar = () => {  
  const {authenticated} = useSelector(state => state.auth)
  // const {authenticated} = useSelector(state => state.auth)


  //  function handleNewBlogButton(params) {
     
  //  }


  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item exact as={NavLink} to='/' header>DenemeTahtasi</Menu.Item>
        <Menu.Item as={NavLink} to='/blogs' name='Yazilar' /> 
        {authenticated && 
        <Menu.Item>
          <Button as={NavLink} to='/createBlog' basic inverted content='Yazi Yaz' />
        </Menu.Item>
        }
        {authenticated ?
        <SignedInMenu />:
        <SignedOutMenu />

        }
      </Container>
    </Menu>
  )
}

export default NavBar
