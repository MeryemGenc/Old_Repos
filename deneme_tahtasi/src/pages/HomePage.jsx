import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Header style={{ marginTop: 100 }}>Burası Home Page</Header>
        <Segment style={{ border: 'none', boxShadow: 'none', paddingLeft: 0 }}>
          <img
            alt='yapayzeka'
            src='https://images.unsplash.com/photo-1518627675569-e9d4fb90cdb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
            style={{ marginTop: 25 }}
          />
        </Segment>
      </Container>
      {/* <Navbar />
      <Container>
        <Header>Burası Ana sayfa</Header>
        <Segment style={{ border: 'none', boxShadow: 'none', paddingLeft: 0 }}>
          <img
            alt='yapayzeka'
            src='https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
            style={{ marginTop: 65 }}
          />
        </Segment>
      </Container> */}
    </div>
  )
}

export default HomePage
