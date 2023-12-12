import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Menu } from 'semantic-ui-react'
import { openModal } from '../../app/common/modal/modalReducer'

const SignedOutMenu = ({setAuthenticated}) => {
  const dispatch = useDispatch()

  return (
    <Menu.Item position='right'>
      <Button onClick={() =>  dispatch(openModal({modalType:'LoginForm'})) } basic inverted>
        Giris
      </Button>
      {/* <Button basic inverted style={{ marginLeft: '0.5em' }}>
        Kayıt Ol
      </Button> */}
    </Menu.Item>
  )
}

export default SignedOutMenu
