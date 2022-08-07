import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {}
];

const userSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setDataStore: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { setDataStore } = userSlice.actions;
export default userSlice.reducer;