import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #2C2C2C;
    padding: 10px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 24px;
    letter-spacing: 1px;
`;

export const Subtitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    letter-spacing: .6px;
`;

export const InputView = styled.View`
    width: 100%;
    min-height: 40px;
    flex-direction: row;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#777'
})`
    width: 88%;
    background-color: #444444;
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 16px;
`;

export const SearchBtn = styled.TouchableOpacity`
    flex:1;
    height: 38px;
    background-color: #444444;
    padding: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const SectionRow = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SectionTitle= styled.Text`
    margin: 7px 0 5px;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`

`;

export const TextLink = styled.Text`
    color: #22A9F9;
`;

export const BtnItem = styled.TouchableOpacity`
    width: 180px;
    height: 180px;
    background-color: #444;
    margin: 5px 10px 5px 0;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 6px;
`;

export const Img = styled.Image`
    width: 130px;
    height: 130px;
`;
