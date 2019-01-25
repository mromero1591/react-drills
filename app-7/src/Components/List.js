import React from 'react'
import Todo from './Todo'
 
export default function List(props) {
  let todos = props.list.map( (element,index) => {
      return( 
          <Todo key={`${element}_${index}`} todo={element}/>
      );
  });

  return (
    <div>
      {todos}
    </div>
  )
}
