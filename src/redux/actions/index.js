import { addDoc, collection ,deleteDoc,query,doc,getDocs} from "firebase/firestore"
import fs from "../../config/firebase"

export const ADD_TODOS="ADD_TODOS";

export const DELETE_TODO = 'DELETE_TODO';

export const postTodo =(newTodo)=>async(dispatch)=>{
    await addDoc(collection(fs,'Todos'),{
        Task:newTodo.Task,
        StartTime:newTodo.StartTime,
        EndTime:newTodo.EndTime,
        Category:newTodo.Category,
        Status:newTodo.Status
    })
    dispatch({
        type:ADD_TODOS,
        payload:newTodo
    })
}
export const deleteTodo = (TaskToBeDeleted)=>async(dispatch)=>{
    const q = query(collection(fs,'Todos'));
    const todos = await getDocs(q);
    for(var snap of todos.docs){
        const data = snap.data();
        if(data.Task===TaskToBeDeleted){
            await deleteDoc(doc(fs, 'Todos', snap.id))
        }
    }
    dispatch({
        type: DELETE_TODO,
        payload: TaskToBeDeleted
    })

}