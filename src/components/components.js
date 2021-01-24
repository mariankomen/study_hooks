import React, {useState} from 'react';
import CompItem from "./compitem";

const Comp = (props) => {

    let ItemCreated = props.data.map((e) => <CompItem name={e.name} age={e.age}/> )
    return(
        <div>
            {ItemCreated}
        </div>
    );
}
export default Comp;