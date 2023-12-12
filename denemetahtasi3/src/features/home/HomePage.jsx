import React from 'react'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container>
                <Header as='h1' inverted >
                    <Image  src='/assets/homeBackg.jpg' style={{marginBottom: 15, height: '250px',  objectFit: 'cover' }} />
                    DenemeTahtasi3
                </Header>
                <Button onClick={() => history.push('/blogs')} size='huge' inverted >
                    Göz At
                    <Icon name='arrow right' inverted/>
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage
