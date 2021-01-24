import React from 'react';

function Comp(props){

    const x = props.counter*2

    return(
        <div>
            {x}
        </div>
    );
}
export default Comp;