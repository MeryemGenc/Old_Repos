import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'
import Navbar from '../components/Navbar'

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Header style={{ marginTop: 100 }}>Burası Profile Page</Header>
        <Segment style={{ border: 'none', boxShadow: 'none', paddingLeft: 0 }}>
          <img
            alt='yapayzeka'
            src='https://images.unsplash.com/photo-1477659803863-c1bf91b34c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
            style={{ marginTop: 25 }}
          />
        </Segment>
      </Container>
    </div>
  )
}

export default ProfilePage
