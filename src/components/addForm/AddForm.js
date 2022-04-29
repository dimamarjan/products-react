import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import {
    AddFormSection,
    AddFormContainer,
    FormContainer,
    ProductDataInpt,
    SubmitButton,
} from './AddForm.style';

import productsOperations from '../../redux/slices/products/producsOperations';

import categoriesOperations from '../../redux/slices/categories/categoriesOperations';
import categoriesSelectors from '../../redux/slices/categories/categoriesSelectors';

import suppliersOperations from '../../redux/slices/suppliers/suppliersOperations';
import suppliersSelectors from '../../redux/slices/suppliers/suppliersSelectors';

export function AddForm() {
    const [categoryId, setCategoryId] = useState();
    const [supplierId, setSupplierId] = useState();
    const [prodNameInpt, setProdNameInpt] = useState('');
    const [prodPriceInpt, setProdPriceInpt] = useState('');
    const isLoadedCategories = useSelector(
        categoriesSelectors.categoriesLodedStatus
    );
    const catList = useSelector(categoriesSelectors.categoriesData);
    const isLoadedSuppliers = useSelector(
        suppliersSelectors.suppliersLodedStatus
    );
    const suppList = useSelector(suppliersSelectors.suppliersData);
    const dispatch = useDispatch();

    const onChangeHandle = (e) => {
        switch (e.target.name) {
            case 'prodName':
                setProdNameInpt(e.target.value);
                return;
            case 'prodPrice':
                setProdPriceInpt(e.target.value);
                return;
            default:
                return;
        }
    };

    const onButtonHandler = (e) => {
        e.preventDefault();
        if (
            prodNameInpt &&
            prodPriceInpt &&
            categoryId.value &&
            supplierId.value
        ) {
            const newProduct = {
                ProductName: prodNameInpt,
                Price: prodPriceInpt,
                CategoryID: categoryId.value,
                SupplierID: supplierId.value,
            };
            dispatch(productsOperations.addProduct(newProduct));
            setCategoryId('');
            setSupplierId('');
            setProdNameInpt('');
            setProdPriceInpt('');
        }
    };

    useEffect(() => {
        if (isLoadedCategories !== 'fulfilled')
            dispatch(categoriesOperations.getCategory());
    }, [dispatch, isLoadedCategories]);

    useEffect(() => {
        if (isLoadedSuppliers !== 'fulfilled')
            dispatch(suppliersOperations.getSupplier());
    }, [dispatch, isLoadedSuppliers]);

    return (
        <AddFormSection>
            <AddFormContainer>
                <FormContainer>
                    <ProductDataInpt
                        type="text"
                        name="prodName"
                        value={prodNameInpt}
                        onChange={onChangeHandle}
                        placeholder="Name..."
                    />
                    <ProductDataInpt
                        type="number"
                        name="prodPrice"
                        value={prodPriceInpt}
                        onChange={onChangeHandle}
                        placeholder="Price..."
                    />
                    <Select
                        options={suppList.map((elem) => {
                            return {
                                value: elem.SupplierID,
                                label: elem.SupplierName,
                            };
                        })}
                        value={categoryId}
                        onChange={setCategoryId}
                    />
                    <Select
                        options={catList.map((elem) => {
                            return {
                                value: elem.CategoryID,
                                label: elem.CategoryName,
                            };
                        })}
                        value={supplierId}
                        onChange={setSupplierId}
                    />
                    <SubmitButton onClick={onButtonHandler}>add</SubmitButton>
                </FormContainer>
            </AddFormContainer>
        </AddFormSection>
    );
}
