import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class User extends Component {
    
    render() {
        //sürekli this.state.name yazmamak için ...
        const {name,login,avatar_url,html_url} = this.props.user;
        return (
            <div className="col-lg-3 col-md-4 mt-3 col-sm-6">
                <div className="card">
                    <img src={avatar_url} alt="Bir sorun olustu." className="img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <Link to={`/user/${login}`} className="btn btn-primary btn-sm">Go To Profile</Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default User
