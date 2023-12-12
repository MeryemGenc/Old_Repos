import React from 'react'
import { useSelector } from 'react-redux' 
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import { signOutFirebase } from '../../app/firestore/firebaseService' 

const SignedInMenu = () => { 
  const history = useHistory()
  const {currentUser} = useSelector(state => state.auth)


  async function handleSignOut() {
    try {
      await signOutFirebase()
      history.push('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

    return (
      <Menu.Item position='right'>
        <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png' } />
        <Dropdown pointing='top left' text={currentUser.email} >
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/createBlog' > <Icon name='plus' />Yeni Yazı</Dropdown.Item>
                <Dropdown.Item as={Link} to='/profile' > <Icon name='user' /> Profil</Dropdown.Item>
                <Dropdown.Item  onClick={handleSignOut} > <Icon name='power' />Çıkış Yap</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
}

export default SignedInMenu
