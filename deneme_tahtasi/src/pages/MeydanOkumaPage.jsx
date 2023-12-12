import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'
import Navbar from '../components/Navbar'

const MeydanOkumaPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Header style={{ marginTop: 100 }}>Burası Meydan okuma Page</Header>
        <Segment style={{ border: 'none', boxShadow: 'none', paddingLeft: 0 }}>
          <img
            alt='yapayzeka'
            src='https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            style={{ marginTop: 25 }}
          />
        </Segment>
      </Container>
    </div>
  )
}

export default MeydanOkumaPage
