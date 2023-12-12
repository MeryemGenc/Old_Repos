import React from 'react'
import { Header, Menu } from 'semantic-ui-react'
import Calendar from 'react-calendar'

const BlogFilters = () => {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%'}}>
                <Header icon='filter' attached color='violet' content='Filtre' />
                <Menu.Item content='Tüm Yazilar' />
                <Menu.Item content='Yazilim' />
                <Menu.Item content='Egitim' />
                <Menu.Item content='Yazi yaz' />
            </Menu>
            <Header icon='calendar' attached color='purple' content='Tarih Seç' />   
            <Calendar />
        </>
    )
}

export default BlogFilters
