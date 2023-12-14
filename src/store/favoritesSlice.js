import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        add(state, action) {
            const isAlreadyAdded = state.some((favCocktail) => favCocktail.id === action.payload.id);
            if (!isAlreadyAdded) {
                state.push(action.payload);

                localStorage.setItem("favorites", JSON.stringify(state));
                console.log("Cocktail added to favorites.");
            } else {
                console.log("Cocktail is already in favorites.");
            }

        },
        remove(state, action) {
            const newState = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(newState));
            console.log("Removed cocktail id: " + action.payload);
            return newState;
        },
    },
});

export const { add, remove } = favoritesSlice.actions;
export default favoritesSlice.reducer;
