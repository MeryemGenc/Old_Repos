import React from 'react'
import { Route, useLocation } from 'react-router'
import { Container } from 'semantic-ui-react'
import BlogDashboard from '../../features/blogs/blogDashboard/BlogDashboard'
import BlogDetailPage from '../../features/blogs/blogDetail/BlogDetailPage'
import BlogForm from '../../features/blogs/blogForm/BlogForm'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'
import ModalManager from '../common/modal/ModalManager'
import { ToastContainer } from 'react-toastify'
import ErrorComponet from '../common/errors/ErrorComponet'
import { useSelector } from 'react-redux'
import LoadingComponent from './LoadingComponent'
import ProfilePage from '../../features/profiles/profilePages/ProfilePage'
import PrivateRoute from './PrivateRoute'

function App() {
  const { key } = useLocation()
  const { initialized } = useSelector((state) => state.async)

  if(!initialized) return <LoadingComponent content='Loading App...' />
 
  return (
    <>
      <ModalManager />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/blogs' component={BlogDashboard} />
              <Route path='/blogs/:id' component={BlogDetailPage} />
              <PrivateRoute
                path={['/createBlog', '/edit/:id']}
                component={BlogForm}
                key={key}
              />
              <PrivateRoute path='/profile' component={ProfilePage} />
              <Route path='/error' component={ErrorComponet} />
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
