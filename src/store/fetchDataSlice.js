import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../Utils/statusCodes";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchCocktails.rejected, (state) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const fetchCocktails = createAsyncThunk(
  "fetchData/fetchCocktails",
  async (displayedLetter) => {
    const responseData = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${displayedLetter}`
    );

    const data = await responseData.json();
    console.log(data);
    const newCocktails = data.drinks.map((drink) => {
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

      return {
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
    });

    return newCocktails;
  }
);

export default fetchDataSlice.reducer;
