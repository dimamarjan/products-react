import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ProductListSection,
    ProductListContainer,
    ProductList,
    ProductListItem,
    ItemListHeader,
    ItemList,
    Item,
    DeleteButton,
} from './ProductsList.style';
import productsOperations from '../../redux/slices/products/producsOperations';
import productsSelectors from '../../redux/slices/products/productsSelectors';

export function ProductsList() {
    const isLoadedProducts = useSelector(productsSelectors.productsLodedStatus);
    const productsList = useSelector(productsSelectors.productData);
    const dispatch = useDispatch();

    const onDeleteHeandler = (e) => {
        dispatch(productsOperations.deleteProduct(e.target.name));
    };

    useEffect(() => {
        if (isLoadedProducts !== 'fulfilled')
            dispatch(productsOperations.getProducts());
    }, [dispatch, isLoadedProducts]);

    return (
        <ProductListSection>
            <ProductListContainer>
                <ProductList>
                    <ProductListItem>
                        <ItemListHeader>
                            <Item>Product</Item>
                            <Item>Supplier</Item>
                            <Item>From</Item>
                            <Item>Category</Item>
                            <Item>Price</Item>
                            <Item>Description</Item>
                            <Item></Item>
                        </ItemListHeader>
                    </ProductListItem>
                    {productsList.map((elem) => {
                        return (
                            <ProductListItem key={elem.ProductID}>
                                <ItemList>
                                    <Item>{elem.ProductName}</Item>
                                    <Item>{elem.Supplier.SupplierName}</Item>
                                    <Item>
                                        {elem.Supplier.City}
                                        <br />
                                        {elem.Supplier.Country}
                                    </Item>
                                    <Item>{elem.Category.CategoryName}</Item>
                                    <Item>{elem.Price}</Item>
                                    <Item>{elem.Category.Description}</Item>
                                    <Item>
                                        <DeleteButton
                                            name={elem.ProductID}
                                            onClick={onDeleteHeandler}
                                        >
                                            delete
                                        </DeleteButton>
                                    </Item>
                                </ItemList>
                            </ProductListItem>
                        );
                    })}
                </ProductList>
            </ProductListContainer>
        </ProductListSection>
    );
}
