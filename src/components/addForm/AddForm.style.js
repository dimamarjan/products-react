import styled from '@emotion/styled';

export const AddFormSection = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

export const AddFormContainer = styled.div`
    padding: 25px;
`;

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProductDataInpt = styled.input`
    height: 36px;
    width: 200px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    :focus {
        outline: 2px solid #4b94f4;
    }
`;

export const SubmitButton = styled.button`
    height: 36px;
    border: 1px solid #cccccc;
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    color: #767676;
`;
