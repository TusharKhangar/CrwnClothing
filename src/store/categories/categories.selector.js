import { createSelector } from "reselect";

// Utiliziamo un selettore
const selectCategoryReducer = (state) => state.categories;

/* [] input selectors, () output selectors
 * se l'input è sempre lo stesso non riaggiorna evitando rerender
 * si occupa solo di estrarre i dati dallo stato */
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

/* Nel reducer teniamo lo stato semplice come lo riceviamo da un API per esempio
 * mentre nel selector modifichiamo a nostro piacimento i dati. 
 * si occupa di trasformare i dati. */
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => 
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
    