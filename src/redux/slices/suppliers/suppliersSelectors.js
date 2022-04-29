const suppliersLodedStatus = (state) => state.suppliers.status;

const suppliersData = (state) => state.suppliers.data;

const suppliersSelectors = {
    suppliersLodedStatus,
    suppliersData,
};

export default suppliersSelectors;
