import { ADD, SUBTRACT } from "./CounterConstants"

export const increaseCount = ()=>{
    return{
        type: ADD
    }
}

export const decreaseCount = ()=>{
    return{
        type: SUBTRACT
    }
}

