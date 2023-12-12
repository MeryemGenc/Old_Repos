import React from 'react'
import { Tab } from 'semantic-ui-react'
import AboutTab from './AboutTab'

const ProfileContent = ({profile, isCurrentUser}) => {
    const panes= [
        {menuItem: 'About', render: () => <AboutTab profile={profile}  isCurrentUser={isCurrentUser} />},
        {menuItem: 'Photos', render: () => <Tab.Pane>Photos</Tab.Pane>},
        {menuItem: 'Blogs', render: () => <Tab.Pane>Blogs</Tab.Pane>},
        {menuItem: 'Takip Edenler', render: () => <Tab.Pane>Takip Edenler</Tab.Pane>},
        {menuItem: 'Takiptekiler', render: () => <Tab.Pane>Takiptekiler</Tab.Pane>},
    ]


    return (
        <Tab 
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
        />
    )
}

export default ProfileContent
