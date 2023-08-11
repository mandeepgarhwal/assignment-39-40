import { createStore, applyMiddleware} from "redux"
import dairyReducer from './rootReducer'
import logger from 'redux-logger'
// import counterReducer from "./counterapp/counterreducer"







const dairystore = createStore(dairyReducer, applyMiddleware(logger))
// const counterstore = createStore(counterReducer, applyMiddleware(logger))

export default dairystore