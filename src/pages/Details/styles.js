import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #2C2C2C;
`;

export const BtnBack = styled.TouchableOpacity`

`;

export const ImgWrapper = styled.View`
    align-items: center;
`;

export const Img = styled.Image`
    width: 270px;
    height: 270px;
`;

export const Main = styled.View`
    flex: 1;
    background-color: #444;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 20px;
    line-height: 32px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #FFF;
    text-transform: capitalize;
`;

export const Nav = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10px 0;
`;

export const BtnAba = styled.TouchableOpacity`
    width: 30%;
    background-color: #22A9F9;
    border-radius: 6px;
`;

export const TextBtn = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #1E1E1E;
    padding: 5px 3px;
`;

export const Section = styled.View`
    margin: 8px;
`;

export const TypeWrapper = styled.View`
    flex-direction: row;
    margin: 10px 0;
`;

export const AbilitiesWrapper = styled.View`
    flex-direction: row;
    margin: 3px 0;
    justify-content: space-evenly;
`;

export const ImgEvolutions = styled.Image`
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 50px;
`;

export const EvolutionsWrapper = styled.View`
    width: 105px;
    height: 105px;
    background-color: #2C2C2C;
    align-items: center;
    justify-content: center;
    border-radius: 70px;
    margin: 3%;
    opacity: 0.8;
`;

export const TextEvolutions = styled.Text`
    font-size: 16px;
    text-transform: capitalize;
    color: #FFF;
    text-align: center;
    position: absolute;
    bottom: 25px;
`;
