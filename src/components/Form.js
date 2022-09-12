import React from "react";
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { postTodo } from '../redux/actions'
import { Icon } from 'react-icons-kit'
import {withPlus} from 'react-icons-kit/entypo/withPlus'

const Form =()=>{


    const dispatch =useDispatch();

    const [Task, setTask]=useState('');
    const [StartTime, setStartTime]=useState('');
    const [EndTime, setEndTime]=useState('');
    const [Category, setCategory]=useState('');
    const [Status, setStatus]=useState('');
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        let todo={
            Task,StartTime,EndTime,Category,Status
        }
        dispatch(postTodo(todo));
        setTask('');
        setStartTime('');
        setEndTime('');
        setCategory('');
        setStatus('');
    }
  return(
        <div>
        <form className='form-row ' onSubmit={handleSubmit}>
 
        <div className="d-flex flex-row justify-content-center">
            <div className="col-sm-2 col-lg-2 col-md-2 p-2 md-auto" >
                <label>Task</label>
                <input type='text' className='form-control input-sm h-50 ' required
                onChange={(e)=>setTask(e.target.value)} value={Task}/>
            </div >
            <span>
        <div className= "col-sm-2 col-lg-1 col-md-1 p-2">
                
        <label for="appt-time">StartTime </label>
        <input id="appt-time" type="time"name="appt-time"  onChange={e=>setStartTime(e.target.value)} value={StartTime}
        required/>            </div></span>

          
            <div className= "col-sm-2 col-lg-1 col-md-1 p-2">
    
        
        <label for="appt-time">EndTime </label>
        <input id="appt-time" type="time"name="appt-time"  onChange={e=>setEndTime(e.target.value)} value={EndTime}  required/>
        
    
            </div>
            <div className="col-sm-2 col-lg-2 col-md-2 p-2 md-auto">
            <label>Category</label>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example " onChange={e=>setCategory(e.target.value)}
            value={Category} required>
            <option value=""></option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
            
            </select>

            </div>
            <div className="col-sm-2 col-lg-2 col-md-2 p-2 md-auto">
            <label>Status</label>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" 
            onChange={e=>setStatus(e.target.value)}
            value={Status} required>
            <option value=""></option>
            <option value="Started">Started</option>

            <option value="Completed">Completed</option>
            <option value="other">Other</option>
            
            </select>

            </div>
         </div>
            <div className=" text-center">
                <button type="submit" className='btn btn-lg submit-btn'>
                <Icon icon={withPlus} size={24}/>
                </button>
            </div>       
    </form>

  
    </div>
   
    )

}

export default Form