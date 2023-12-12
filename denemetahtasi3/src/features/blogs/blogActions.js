// import { fetchSampleData } from '../../app/api/mockApi'
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/asyncReducer'
import { dataFromSnapshot, fetchBlogsFromFirestore } from '../../app/firestore/firestoreService'
import {
  CLEAR_BLOGS,
  CLEAR_SELECTED_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOGS,
  LISTEN_TO_SELECTED_BLOG,
  SET_START_DATE,
  UPDATE_BLOG,
} from './blogConstants'

export function fetchBlogs(startDate, limit, lastDocSnapshot) {
  return async function (dispatch) {
    dispatch(asyncActionStart())
    try {
      //   const blogs = await fetchSampleData()
      const snapshot = await fetchBlogsFromFirestore(
        startDate,
        limit,
        lastDocSnapshot
      ).get()
      const lastVisible = snapshot.docs[snapshot.docs.length-1]
      const moreBlogs = snapshot.docs.length >= limit
      const blogs = snapshot.docs.map(doc => dataFromSnapshot(doc))
      dispatch({
        type: FETCH_BLOGS,
        payload: { blogs, moreBlogs, lastVisible },
      })
      dispatch(asyncActionFinish())
      // return lastVisible
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }
}

export function setStartDate(date) {
  return function (dispatch) {
    dispatch(clearBlogs())
    dispatch({type: SET_START_DATE, payload: date})
  }
}

export function listenToSelectedBlog(blog) {
  return {
    type: LISTEN_TO_SELECTED_BLOG,
    payload: blog,
  }
}

export function clearSelectedBlog() {
  return {
    type: CLEAR_SELECTED_BLOG,
  }
}

export function createBlog(blog) {
  return {
    type: CREATE_BLOG,
    payload: blog,
  }
}

export function updateBlog(blog) {
  return {
    type: UPDATE_BLOG,
    payload: blog,
  }
}

export function deleteBlog(blogId) {
  return {
    type: DELETE_BLOG,
    payload: blogId,
  }
}

export function clearBlogs() {
  return {
    type: CLEAR_BLOGS,
  }
}
