import styled from "styled-components";

export const NameTripModalTitle = styled.h1`
    font-size: 20px;
    font-family: "Domine", serif;
    margin: 0;
`;

export const NameTripModalContent = styled.div`
    margin-top: 30px;
`;

export const NameTripModalIntroduction = styled.p`
    margin-bottom: 0;
`;

export const NameTripModalInput = styled.input`
    height: 30px;
    font-size: 15px;
    line-height: 1;
    font-family: "Domine", serif;
    margin-top: 15px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 7px;
`;

export const NameTripModalActions = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`;

export const NameTripModalAction = styled.button`
    font-family: "Domine", serif;
    font-size: 13px;
    padding: 10px;
    border-radius: 10px;
    border: none;

    &:not(:last-child) {
        margin-right: 10px;
    }
    
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

export const NameTripModalPrimaryAction = styled(NameTripModalAction)`
    background-color: rgba(6,105,113,1);
    color: white;
`;
