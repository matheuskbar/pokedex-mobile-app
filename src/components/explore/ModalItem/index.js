import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, BtnItem, Header, Title, Main, Texts, BtnClose, Footer } from './styles';

export default function ModalItem({ poke, close }) {
    const navigation = useNavigation();

    return(
        <Container>
            <Header>
                <BtnClose onPress={close}>
                    <Icon
                     name='clear'
                     color='#FFF'
                     size={22}
                    />
                </BtnClose>
                <Title>{poke.name}</Title>
            </Header>
            

            <Main>
                <Texts>N°</Texts>
                <Texts style={{ marginLeft: 8, marginBottom: 15 }}>00{poke.id}</Texts>

                <Texts>Tipo</Texts>
                <Texts style={{ marginLeft: 8, marginBottom: 15 }}>
                    {poke.types[0]?.type.name}    {poke.types[1]?.type.name}
                </Texts>
            </Main>
            <Footer>
                <BtnItem onPress={() => navigation.navigate('Detalhes', poke)}>
                    <Texts>mais detalhes</Texts>
                </BtnItem>
            </Footer>
        </Container>
    )
}
