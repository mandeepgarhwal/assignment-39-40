import React from 'react'
import {connect} from 'react-redux'
import  {sellmilk, sellcurd, addcurd}  from './dairyshop/dairyactioncreaters'
// import  Dispatch  from 'redux'
// import dairyReducer from './rootReducer'
// import { initialstate1, initialstate2 } from './dairyshop/dairyreducer'
function Dairycounter(props) {
    console.log(props.amountMilk)
    console.log(props.amountCurd)
  return (
    <>
        <h1> Dairy shop location 1</h1>
        <h2> Amount of milk: {props.amountMilk} </h2>
        <h2> Amount of curd:  {props.amountCurd}</h2>
        <button className='btn btn-info' onClick={props.buymilk}> Milk sold</button>
        <button className='btn btn-danger' onClick={props.buycurd}> Curd sold</button>
        <button className='btn btn-success' onClick={props.addcurd}> Fresh curd ready </button>
        </>
  ) 
}

const mapStateToProps = (state1) => {
    return{
        amountMilk : state1.milk.amountOfMilk,
        amountCurd : state1.curd.amountOfCurd


};
}
const mapDispatch1ToProps = (dispatch) => {
  return{
    buymilk: ()=> {
      // console.log(3)
      dispatch(sellmilk())
    },
    buycurd: ()=> {
     
            dispatch(sellcurd())
          },
    addcurd: () => {
      // console.log(3)
      dispatch(addcurd())
    }
  }
}
// const mapDispatch2ToProps = (dispatch) => {
//   return{
//     buycurd: ()=> {
//       // console.log(3)
//       dispatch(sellcurd())
//     }
//   }
// }
export default connect(mapStateToProps, mapDispatch1ToProps)(Dairycounter);