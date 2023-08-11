// import { Reducer } from "redux"
import { BUY_MILK } from "./dairyactions"

export const initialstate1 = {amountOfMilk : 14}


const milkReducer = (state1 = initialstate1, action) => {
    switch (action.type) {
        case BUY_MILK:
            console.log(4)
            return{

            ...state1,
            amountOfMilk : state1.amountOfMilk - 1
            }
        default:
           return state1
    }
}
export default milkReducer

