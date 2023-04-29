import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {}
];

const userSlice = createSlice({
    name: "data",
    initialState: {webpage: {}, card: {},disponibles: {}},
    reducers: {
        setDataStore: (state, action) => {
            // state.push(action);
            state.card = action.payload
        },
        setDataWebpage: (state,action) => {
            state.webpage = action.payload
        },
        setDataDisponibles: (state,action) => {
            state.disponibles = action.payload
        }
    },
});

export const { setDataStore, setDataWebpage,setDataDisponibles } = userSlice.actions;
export default userSlice.reducer;