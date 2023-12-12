import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Button, Divider, Modal } from 'semantic-ui-react'
import { openModal } from '../../app/common/modal/modalReducer'

const UnauthModal = ({ history }) => {
  const [open, setOpen] = useState(true)
  const { prevLocation } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  function handleClose() {
    // history.goBack() => tarayıcıdaki genel (tüm sekmeler içindeki) geçmişten geri gider => new package => connected-react-router
    if (history && prevLocation) {
        history.push(prevLocation.pathname)
    } else {
        history.push('/blogs')
    }
    setOpen(false)
  }

  return (
    <Modal open={open} size='mini' onClose={handleClose}>
      <Modal.Header content='You need to be sign in to do that.' />
      <Modal.Content>
        <p>Please sign in.</p>
        <Button
          fluid
          color='teal'
          content='Login'
          onClick={() => dispatch(openModal({ modalType: 'LoginForm' }))}
        />
        <Divider />
        <div style={{ textAlign: 'center' }}>
          <p>Or click 'Cancel' to continue as a guest</p>
          <Button onClick={handleClose} content='Cancel' />
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default UnauthModal
