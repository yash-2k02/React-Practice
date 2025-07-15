// practiced actions, reducer and store concepts of redux

import {createStore} from 'redux';


const initialChocolateState = {
    chocolates:3
}

const BUY_CHOCOLATE = 'Buy chocolate'
const SELL_CHOCOLATE = 'Sell chocolate'


const buyChocolate = ()=> {
    return {
        type: BUY_CHOCOLATE,
        info: "Buy chocolate action"
    }
}

const sellChocolate = ()=> {
    return {
        type: SELL_CHOCOLATE,
        info: "Sell chocolate action"
    }
}

const reducer = (state = initialChocolateState, action)=>{
    switch (action.type){
        case BUY_CHOCOLATE:
            return {
                ...state,
                chocolates: state.chocolates-1
            }
        case SELL_CHOCOLATE:
            return {
                ...state,
                chocolates: state.chocolates+1
            }
    }
}


const store = createStore(reducer)
store.subscribe(()=> console.log(store.getState()))

store.dispatch(buyChocolate())
store.dispatch(buyChocolate())
store.dispatch(sellChocolate())