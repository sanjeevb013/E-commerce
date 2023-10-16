import redux,{createStore,applyMiddleware} from 'redux'
import reducer from './Reducers/reducer'
import thunkMiddleware from 'redux-thunk'
const store=createStore(reducer,applyMiddleware(thunkMiddleware));
export default store;