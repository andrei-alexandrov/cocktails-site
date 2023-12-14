import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("details")) || [];

const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        addToDetails(state, action) {
            state = [action.payload];
            localStorage.setItem("details", JSON.stringify(state));
            return state;
        },
        goBack(state, action) {
            const newState = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("details", JSON.stringify(newState));
            return newState;
        },
    },
});

export const { addToDetails, goBack } = detailsSlice.actions;
export default detailsSlice.reducer;
