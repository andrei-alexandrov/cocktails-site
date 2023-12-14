import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../store/favoritesSlice";
import detailsReducer from "../store/detailsSlice";
import fetchDataReducer from "../store/fetchDataSlice";

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        details: detailsReducer,
        fetchData: fetchDataReducer,
    }
})

export default store;