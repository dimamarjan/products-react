const categoriesLodedStatus = (state) => state.categories.status;

const categoriesData = (state) => state.categories.data;

const categoriesSelectors = {
    categoriesLodedStatus,
    categoriesData,
};

export default categoriesSelectors;
