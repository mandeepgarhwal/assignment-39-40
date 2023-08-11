import { BUY_CURD, BUY_MILK, ADD_CURD } from "./dairyactions"

export const sellmilk = () => {

    return{
        type: BUY_MILK
    }
}

export const sellcurd = () => {
    return{
        type: BUY_CURD
    }
}
export const addcurd = () => {
    console.log(4)
    return{
        type: ADD_CURD
    }
}