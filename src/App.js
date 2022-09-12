import './App.css';
import { useSelector } from 'react-redux';
import { Todos } from './components/todos/Todos';
import Form  from './components/Form';
// import {BrowserRouter as Router } from "react-router-dom"


function App() {

  const todos =useSelector((state)=>state.operationsReducer);




  return (
    
    <div className="App">
      <h1 >Today</h1>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div>
      <h2 className="App-header " style={{ marginLeft: '3rem' }}>
        ToDoList
      </h2>
      <br>
      </br>
      <Form/>
      <br/>
      <br/>

      {/* <Todos todos={todos}/> */}
      {todos.length > 0? (
              <Todos todos={todos}/>
      ):(<div className='message-box text-center'>
        no Todos are added 
        
      </div>)}
    </div>
  
  );
}

export default App;
