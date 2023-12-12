
import { CLEAR_BLOGS, CLEAR_SELECTED_BLOG, CREATE_BLOG, DELETE_BLOG, FETCH_BLOGS, LISTEN_TO_SELECTED_BLOG, RETAIN_STATE, SET_START_DATE, UPDATE_BLOG } from './blogConstants'

const initialState = {
  blogs: [],
  moreBlogs: true,
  selectedBlog: null,
  lastVisible: null,
  startDate: new Date(),
  retainState: false
}

export default function blogReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, payload],
      }
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((blg) => blg.blogId !== payload.blogId),
          payload,
        ],
      }
    case DELETE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs.filter((blg) => blg.blogId !== payload)],
      }
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, ...payload.blogs],
        moreBlogs: payload.moreBlogs,
        lastVisible: payload.lastVisible,
        // blogs: payload.blogs,
      }
    case LISTEN_TO_SELECTED_BLOG:
      return {
        ...state,
        selectedBlog: payload,
      }
    case CLEAR_SELECTED_BLOG:
      return {
        ...state,
        selectedBlog: null,
      }
    case CLEAR_BLOGS:
      return {
        ...state,
        blogs: [],
        moreBlogs: true,
        lastVisible: null,
      }
    case SET_START_DATE:
      return {
        ...state,
        retainState: false,
        moreBlogs: true,
        startDate: payload,
      }
    case RETAIN_STATE:
      return {
        ...state,
        retainState: true,
      }

    default:
      return state
  }
}
