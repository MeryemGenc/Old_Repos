import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = () => {
    return (
        <header>
            <h1>Blog App Header</h1>
            <NavLink to="/blogs" >Blogs</NavLink>
            <NavLink to="/create" >Create</NavLink>
            <button onClick={logout}>Logout</button>
        </header>
    )
}

export default Header
