import React from 'react';




//////Header componentinin ES6 functional component hali//
//Function Component içerisinde state kullanabilmek için React Hook kullanılmalı.
//BU component => stateless function component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    );
}





export default Header;