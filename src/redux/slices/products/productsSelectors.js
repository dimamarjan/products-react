const productsLodedStatus = (state) => state.products.status;

const productData = (state) => state.products.data;

const productsSelectors = {
    productsLodedStatus,
    productData,
};

export default productsSelectors;
