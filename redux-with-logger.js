// practiced combine reducers
// npm i redux
// npm i redux-logger

import {createStore, combineReducers, applyMiddleware} from 'redux';
import pkg from 'redux-logger';
const {createLogger} = pkg;

const initialChocolateState = {
    chocolates:3
}

const initialFlowersState = {
    flowers:3
}

const BUY_CHOCOLATE = 'Buy chocolate'
const SELL_CHOCOLATE = 'Sell chocolate'
const BUY_FLOWERS = 'Buy flowers'
const SELL_FLOWERS = 'Sell flowers'

const logger = createLogger()


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


const buyFlowers = ()=> {
    return {
        type: BUY_FLOWERS,
        info: "Buy flowers action"
    }
}

const sellFlowers = ()=> {
    return {
        type: SELL_FLOWERS,
        info: "Sell flowers action"
    }
}


const chocolateReducer = (state = initialChocolateState, action)=>{
    switch (action.type){
        case BUY_CHOCOLATE:
            return {
                ...state,
                chocolates: state.chocolates - 1
            }
        case SELL_CHOCOLATE:
            return {
                ...state,
                chocolates: state.chocolates + 1
            }
        default: return state
    }
}

const flowersReducer = (state = initialFlowersState, action)=>{
    switch (action.type){
        case BUY_FLOWERS:
            return {
                ...state,
                flowers: state.flowers - 1
            }
        case SELL_FLOWERS:
            return {
                ...state,
                flowers: state.flowers + 1
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    chocolate:chocolateReducer,
    flower:flowersReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => console.log(store.getState()))

store.dispatch(buyChocolate())
store.dispatch(buyChocolate())
store.dispatch(sellChocolate())

store.dispatch(buyFlowers())
store.dispatch(buyFlowers())
store.dispatch(sellFlowers())