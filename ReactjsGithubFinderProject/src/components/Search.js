import React, { useContext, useState } from 'react'
import GithubContext from "../context/github/githubContext"
import AlertContext from '../context/alert/alertContext'

const Search = () => {
    const {searchUsers,clearUsers,users} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const [keyword,setKeyword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (keyword==='') {
            setAlert('Lütfen aranacak ifadeyi giriniz.','danger');
        }else{
            searchUsers(keyword);
            setKeyword('');
        }
    }

    const onChange = (e) => {
        setKeyword( e.target.value );
    }
    
    return (

        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input value={keyword} type="text" onChange={onChange} className="form-control"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            {
                //showClearButton'dn false dönerse && sonrası çalışmaz.
                users.length>0 && <button onClick={clearUsers} className="btn btn-warning btn-sm btn-block mt-3">Clear Results</button>
            }
        </div>
    )
    
}

export default Search
