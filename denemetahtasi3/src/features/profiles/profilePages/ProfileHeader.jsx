import React from 'react'
import { Button, Divider, Grid, Header, Item, Reveal, Segment, Statistic } from 'semantic-ui-react'

const ProfileHeader = ({profile, isCurrentUser}) => {


// console.log('header')
// console.log(isCurrentUser)
// console.log('header')



    return (
        <Segment>
            <Grid>
                <Grid.Column width={12} >
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size='small' src='/assets/user.png' />
                            <Item.Content verticalAlign='middle' >
                                <Header as='h1' style={{ display: 'block', margnBottom: 10 }} >{profile.displayName}</Header>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column width='4' >
                    <Statistic.Group>
                        <Statistic label='Takipciler' value={10} />
                        <Statistic label='Takip Edilenler' value={5} />
                        <Divider />
                        <Reveal animated='move' >
                            <Reveal.Content visible style={{ width: '100%' }} >
                                <Button fluid color='teal' content='Takip Ediliyor' />
                            </Reveal.Content>
                            <Reveal.Content hidden style={{ width: '100%' }} >
                                <Button basic fluid color='red'>Takipten Çık</Button>
                            </Reveal.Content>
                        </Reveal>
                    </Statistic.Group>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default ProfileHeader
