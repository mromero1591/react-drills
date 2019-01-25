import React from 'react'

export default function Todo(props) {
    let todos = props.list.map( (element, index) => {
        return(
            <h4 key={`${element}_${index}`}> {element}</h4>
        );
        
    });
    return(
        <div>{todos}</div>
    )
}