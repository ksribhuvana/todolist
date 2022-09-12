import React from "react";
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import './Todos.css';

import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../redux/actions";
export const Todos =({todos}) => {
    const dispatch=useDispatch();

    // onDeleteClick=()=>{
    //     console.log('inside ')
    // }

    return (

      <div className='container margin-auto text-center'> 

            <table className='table table-striped table-hover table-bordered  table-container mt-2 p-6' style={{ marginLeft: '0rem',marginRight:'0rem' }} >
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">StartTime</th>
                    <th scope="col">EndTime</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delete
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                    {todos && todos.map((todo)=>
                <tr key={todo.Task}>
                    <td>{todo.Task}</td>
                    <td>{todo.StartTime}</td>
                    <td>{todo.EndTime}</td>
                    <td>{todo.Category}</td>
                    <td>{todo.Status}</td>

                    <td>

                    <button type="submit" className='btn btn-lg submit-btn'>
                


                    <span className='trash' 
                    onClick={()=>dispatch(deleteTodo(todo.Task))}
                  
                        >
                        <Icon icon={trash} 
                        
                         size={24}/>
                        </span>
                        </button>
                
                    </td>

  
                </tr>)}
                </tbody>
            </table>
       

</div> 
   
    )
}