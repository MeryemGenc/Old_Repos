import React from 'react'
import loading from './loading.gif'

const Loading = () => {
    return (
        <React.Fragment>
            <img src={loading} alt="Loading..." style={{width:"400px", display:"block", margin:"auto", marginTop:"160px" }}/>
        </React.Fragment>
    )
}

export default Loading