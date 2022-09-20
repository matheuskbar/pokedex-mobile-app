import styled from 'styled-components/native';

export const Container = styled.View`
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

export const SectionRow = styled.View`
    width: 100%;
    margin: 10px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.TouchableOpacity`

`;

export const TextLink = styled.Text`
    color: #22A9F9;
`;

export const BtnItem = styled.TouchableOpacity`
    flex-direction: row;
    margin-bottom: 10px;
    padding-bottom: 8px;
`;

export const Section = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const Img = styled.Image`
    width: 150px;
    height: 150px;    
    margin-right: 8px;
`;

export const ModalDetail = styled.Modal`
    
`;
