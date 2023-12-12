import React from 'react'
import BlogListItem from './BlogListItem'
import InfiniteScroll from 'react-infinite-scroller';

const BlogList = ({ blogs, getNextBlogs, loading, moreBlogs }) => {
  
  return (
    <>

      {blogs.length !== 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={getNextBlogs}
          hasMore={!loading && moreBlogs}
          initialLoad={false}
        >
            {blogs.map((blog) => (
        <BlogListItem blog={blog} key={blog.blogId} />
      ))}
        </InfiniteScroll>
      )}

      {/* {blogs.map((blog) => (
        <BlogListItem blog={blog} key={blog.blogId} />
      ))} */}

    </>
  )
}

export default BlogList
