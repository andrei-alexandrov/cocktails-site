import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../Utils/statusCodes";

const initialState = {
    data: [],
    status: StatusCode.IDLE,
};

const fetchRandomSlice = createSlice({
    name: "fetchRandom",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomCocktail.pending, (state) => {
                state.status = StatusCode.LOADING;
            })
            .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE;
            })
            .addCase(fetchRandomCocktail.rejected, (state) => {
                state.status = StatusCode.ERROR;
            });
    },
});

export const fetchRandomCocktail = createAsyncThunk(
    "fetchData/fetchRandomCocktail",
    async () => {
        const responseData = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );

        const data = await responseData.json();

        if (data.drinks && data.drinks.length > 0) {
            const drink = data.drinks[0];

            const ingredients = [];
            const measures = [];

            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];

                if (ingredient) {
                    ingredients.push(ingredient);
                    measures.push(measure || "");
                }
            }

            const newCocktail = {
                id: drink.idDrink,
                image: drink.strDrinkThumb,
                title: drink.strDrink,
                type: drink.strAlcoholic,
                glass: drink.strGlass,
                category: drink.strCategory,
                description: drink.strInstructions,
                ingredients,
                measures,
            };

            return [newCocktail];
        } else {
            return [];
        }
    }
);

export default fetchRandomSlice.reducer;
