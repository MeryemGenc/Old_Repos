import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'       
import { editBlogFromDatabase,removeBlogFromDatabase } from '../actions/blogs'       

const EditBlogPage = (props) => {
    return (
        <div>
            <h1>edit </h1>
            <BlogForm 
                blog={props.blog} 
                onSubmit={(blog) => {
                    props.dispatch(editBlogFromDatabase(props.blog.id , blog));
                    props.history.push("/blogs");
                }}
            ></BlogForm>
            <button onClick={() => {
                props.dispatch(removeBlogFromDatabase(props.blog.id));
                props.history.push("/blogs");
            }} >Delete</button>
        </div>
    )
}

const mapStatetoProps = (state,props) => {
    return {
        blog: state.blogs.find((b) => {
            //match.params.id = router da alınan :id değerine props.match.params.id ile ulaşılır 
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStatetoProps)(EditBlogPage)
