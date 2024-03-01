import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoModifier = createSlice({
    name: "todoReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push( {text: action.payload, id: Date.now() });
        },
        remove: (state, action) => {
            return state.filter( todo => todo.id !== parseInt(action.payload) );
        }
    }
});

export const { add, remove } = todoModifier.actions;

export default configureStore( { reducer: todoModifier.reducer });