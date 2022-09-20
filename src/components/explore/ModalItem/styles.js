import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    height: 40%;
    position: absolute;
    top: 30%;
    left: 5%;
    background-color: #444;
    border-radius: 6px;
`;

export const Header = styled.View`
    width: 100%;
    height: 18%;
    background-color: red;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    text-transform: capitalize;
`;

export const Main = styled.View`
    flex: 1;
    padding: 8px;
`;

export const Texts = styled.Text`
    font-size: 17px;
    color: #FFF;
    text-transform: capitalize;
`;

export const BtnItem = styled.TouchableOpacity`
    width: 50%;
    height: 40px;
    background-color: #22A9F9;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.View`
    align-items: center;
    margin: 8px;
`;

export const BtnClose = styled.TouchableOpacity`
    position: absolute;
    right: 8px;
`;
