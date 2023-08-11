import { BUY_CURD, ADD_CURD } from "./dairyactions"
export const initialstate2 = {amountOfCurd : 18}

export const curdReducer = (state2 = initialstate2, action) => {
    switch (action.type) {
        case BUY_CURD:
            return{
            ...state2,
            amountOfCurd : state2.amountOfCurd - 1
            }
        case ADD_CURD:
            console.log(5)
            return{
            ...state2,
            amountOfCurd : state2.amountOfCurd + 1
            }
        default:
           return state2
    }
}
// export const addcurdReducer = (state2 = initialstate2, action) => {
//     switch (action.type) {
//         case ADD_CURD:
//             console.log(5)
//             return{
//             ...state2,
//             amountOfCurd : state2.amountOfCurd + 1
//             }
//         default:
//            return state2
//     }
// }