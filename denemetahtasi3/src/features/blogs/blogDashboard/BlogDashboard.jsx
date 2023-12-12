import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import { useSelector } from 'react-redux'
// import LoadingComponent from '../../../app/layout/LoadingComponent'
import BlogListItemPlaceholder from './BlogListItemPlaceholder'
// import BlogDetailSideBar from '../blogDetail/BlogDetailSidebar'
// import { listenToBlogsFromFirestore } from '../../../app/firestore/firestoreService'
import { fetchBlogs } from '../blogActions'
import { useDispatch } from 'react-redux'
// import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection'
import { Loader, Segment } from 'semantic-ui-react'
import { RETAIN_STATE } from '../blogConstants'

const BlogDashboard = () => {
  const limit = 2
  const dispatch = useDispatch()
  const { blogs, moreBlogs, startDate, lastVisible, retainState } = useSelector((state) => state.blog)
  const { loading } = useSelector((state) => state.async)
  // const [lastDocSnapshot, setLastDocSnapshot] = useState(null)
  const [loadingInitial, setLoadingInitial] = useState(false)

  useEffect(() => {
    if(retainState) return
    setLoadingInitial(true)
    dispatch(fetchBlogs(startDate, limit)).then(() => {
      // setLastDocSnapshot(lastVisible)
      setLoadingInitial(false)
    })
    return () => {
      dispatch({type: RETAIN_STATE})
    }
  }, [dispatch, startDate, retainState])

  function handleFetchLastBlogs () {
    dispatch(fetchBlogs(retainState, limit, lastVisible))
    // .then((lastVisible) => {
    //   setLastDocSnapshot(lastVisible)
    // })
  }



  // useFirestoreCollection({
  //   query: () => listenToBlogsFromFirestore(),
  //   data: (blogs) => dispatch(listenToBlogs(blogs)),
  //   deps: [dispatch],
  // })

  return (
    <Segment clearing>
      {loadingInitial && (
        <>
          <BlogListItemPlaceholder />
          <BlogListItemPlaceholder />
        </>
      )}
      <BlogList blogs={blogs} getNextBlogs={handleFetchLastBlogs} loading={loading} moreBlogs={moreBlogs} />

        {/* <Button
        loading={loading}
        disabled={!moreBlogs}
        style={{marginRight: 35, marginTop: 35, marginBottom: 55}}
          onClick={handleFetchLastBlogs}
          floated='right'
          color='teal'
          content='Daha Fazla Blog...'
        /> */}

      {/* <BlogDetailSideBar /> */}
      <Loader active={loading} />
    </Segment>
  )
}

export default BlogDashboard
