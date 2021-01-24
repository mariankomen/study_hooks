import React from 'react';

const CompItem = (props) => {
    return(
        <div>
            <li>{props.name}{props.age}</li>
            <br/>
        </div>
    )
}
export default CompItem;