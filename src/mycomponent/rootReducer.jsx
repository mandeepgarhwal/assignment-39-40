import { combineReducers } from 'redux'
import { curdReducer } from './dairyshop/curdreducer'
import milkReducer from './dairyshop/milkreducer'
// import { addcurdReducer } from './dairyshop/curdreducer'
const dairyReducer = combineReducers({
        curd : curdReducer, 
        milk: milkReducer,

        
})

export default dairyReducer
