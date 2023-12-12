import React from 'react'
import { Grid, Header, Tab } from 'semantic-ui-react'

const AboutTab = ({ profile, isCurrentUser }) => {
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header floated='left'>{`About ${profile.displayName}`}</Header>
        </Grid.Column>
        {isCurrentUser &&  <Grid.Column width={16}>
          <Header floated='left'>Kullancı Girişi Yapıldı</Header>
        </Grid.Column>}
       
        <Grid.Column width={16}>
          <>
            <div style={{ marginBottom: 10 }}>
              <div> {profile.description || null} </div>
            </div>
          </>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  )
}

export default AboutTab
