import { combineReducers } from 'redux'
import { curdReducer } from './dairyshop/curdreducer'
import milkReducer from './dairyshop/milkreducer'
import {counterReducer} from './counterapp/counterreducer'
// import { addcurdReducer } from './dairyshop/curdreducer'
const dairyReducer = combineReducers({
        curd : curdReducer, 
        milk: milkReducer,
        quecounter : counterReducer
        // curdadd : addcurdReducer
        
})

export default dairyReducer