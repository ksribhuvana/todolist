import { combineReducers } from "redux";
import operationsReducer from "./reducers/operation";
const rootReducer= combineReducers({
    operationsReducer,
   

})
export default rootReducer;