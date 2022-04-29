import styled from '@emotion/styled';

const listNormalizer = `
    list-style: none;
    padding: 0;
    margin: 0
`;

const itemList = `
    display: flex;
    justify-content: center
`;

export const ProductListSection = styled.div`
    width: 1080px;
    margin: 0 auto;
`;

export const ProductListContainer = styled.div`
    padding: 25px;
`;

export const ProductList = styled.ul`
    ${listNormalizer};
`;

export const ProductListItem = styled.li`
    :nth-of-type(even) {
        background-color: #e2e2e2;
    }
    :last-child {
        border-radius: 0 0 15px 15px;
    }
`;

export const ItemList = styled.ul`
    ${listNormalizer};
    ${itemList};
`;

export const ItemListHeader = styled.ul`
    ${listNormalizer};
    ${itemList};
    background-color: #767676;
    color: #ffffff;
    border-radius: 15px 15px 0 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    :nth-of-type(-n + 5) {
        width: 120px;
    }
    :nth-of-type(6n) {
        width: 200px;
    }
    :nth-of-type(7n) {
        width: 90px;
    }
`;

export const DeleteButton = styled.button`
    border: 1px solid #cccccc;
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    color: #767676;
`;
