import {ADD_TODOS} from "../actions";
import { DELETE_TODO } from "../actions";
const initialState=[
    // {
    //     Task:"workout",
    //     StartTime:"07:00",
    //     EndTime:"07:30",
    //     Category:"Personal",
    //     Status:"Completed"
    // }
];

const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        // case GET_BOOKS:
        //     return action.payload;

        case ADD_TODOS:
            return [...state, action.payload]
        default:
            return state;
          



        case DELETE_TODO:
            const filteredTodos = state.filter((todo)=>todo.Task!==action.payload);
            return filteredTodos;

        // case UPDATE_BOOK:
        //     const updatedBooks=[];
        //     const data = action.payload;
        //     state.map((book)=>{
        //         if(book.isbn===data.previousIsbn){
        //             book.isbn = data.isbn;
        //             book.author = data.author;
        //             book.title = data.title;
        //         }
        //         updatedBooks.push(book);
        //     });
        //     return updatedBooks;
            
        
    }
}

export default operationsReducer;