import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import ngoReducer from './ngo/ngoReducers'
const appReducer = combineReducers({
     user : userReducer,
     ngo : ngoReducer
  })

const RootReducer = (state,action) =>{
    return appReducer(state,action)
}
export default RootReducer