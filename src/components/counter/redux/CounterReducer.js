import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        add: (state) => {state.count+=1},
        subtract: (state) => { state.count = state.count > 0 ? state.count - 1 : 0 }
    }
});

export const { add, subtract } = counterSlice.actions;

export default counterSlice.reducer;