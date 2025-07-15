import { ADD, SUBTRACT } from "./CounterConstants"

const initialState = {
    count:0
}

export const counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD:
            return {
                ...state,
                count:state.count+1
            }
        case SUBTRACT:
            return {
                ...state,
                // check: function (){
                //     if(state.count>0){
                //     return state.count-1
                // }else{
                //     return 0
                // }
                // },
                // count: check(),
                count: state.count>0?state.count-1:0
            }
        default: return state
    }
}