import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'

const ErrorComponet = () => {
    const {error} = useSelector(state => state.async)

    return (
        <Segment placeholder>
            <Header textAlign='center' content={ error?.message || 'Oops! Something went wrong :(' } />
            <Button as={Link} to='/blogs' primary style={{ marginTop: 20 }} content='Geri Don' />
        </Segment>
    )
}

export default ErrorComponet
