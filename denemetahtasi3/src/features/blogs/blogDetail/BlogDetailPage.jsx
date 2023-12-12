import { format } from 'date-fns'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Container, Divider, Grid, Image, Label } from 'semantic-ui-react'
import { listenToBlogFromFirestore } from '../../../app/firestore/firestoreService'
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc'
import { listenToSelectedBlog } from '../blogActions'
import LoadingComponent from '../../../app/layout/LoadingComponent'; 

const BlogDetailPage = ({ match }) => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state)=> state.auth)
  const blog = useSelector((state) =>
    state.blog.selectedBlog
  )
  // const {authenticated} = useSelector((state)=> state.auth)
  // isHosting = currentUser
 
  const {loading, error} = useSelector(state => state.async)
 
  useFirestoreDoc({
    query: () => listenToBlogFromFirestore(match.params.id),
    data: (blog) => dispatch(listenToSelectedBlog(blog)),
    deps: [match.params.id, dispatch]
  })


  if (loading || (!blog && !error )) {
    
    return <LoadingComponent content='Loading Blogs...' />
  }
  if (error) {
    return <Redirect to='/error' />
  }

  return (
    <Grid>
      <Grid.Row>
      <Grid.Column width={12}>
        <Container as='h1' textAlign='center'>
          {blog?.blogTitle}
        </Container>
        <Container as='h5' textAlign='right'>{format(blog?.blogDate, 'MMMM d, yyyy')}</Container>
        <Container as='h5' textAlign='right'>{blog?.blogCategory} </Container>
        <Container textAlign='justified'>
          <Divider style={{ marginTop: 10, marginBottom: 40 }} />

          <Image
            style={{ marginBottom: 50 }}
            centered
            src={blog?.blogPhotoURL}
            size='large'
          />

          {blog?.blogArticle}
        </Container>
      </Grid.Column>
      <Grid.Column width={4}>
      {/* <BlogFilters /> */}
        {/* <BlogDetailSidebar/> */}
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {currentUser && (
            <Label size='medium' attached='bottom right' as={Link} to={`/edit/${blog?.blogId}`} color={'teal'}>
              Güncelle
            </Label>)}
      </Grid.Row>
      
    </Grid>
  )
}

export default BlogDetailPage
