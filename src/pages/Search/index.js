import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

import { ApiContext } from '../../contexts/api';
import ListType from '../../components/search/ListType';

import { 
    Container, 
    Title, 
    InputView, 
    Input, 
    SearchBtn, 
    Subtitle,
    BtnItem,
    Img,
    SectionRow,
    TextLink,
 } from './styles';


export default function Search() {
    const navigation = useNavigation();

    const { types } = useContext(ApiContext);

    const [input, setInput] = useState('');
    const [pokemon, setPokemon] = useState(null);

    async function research() {
        if(input === '') return;

        Keyboard.dismiss()

        setPokemon({});
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(input).toLowerCase()}/`)
        .then((value) => {
            let pokemonResponse = {
                name: value.data.name,
                id: value.data.id,
                image: value.data.sprites.other["official-artwork"].front_default,
                types: value.data.types,
                abilities: value.data.abilities,
                stats: value.data.stats,
                species: value.data.species.url,
            }
            setPokemon(pokemonResponse)
        })
        .catch((error) => alert('Verifique o que foi digitado e tente buscar novamente!'))

        setInput('');
    }

    return(
        <Container>
            <View style={{ borderBottomColor: '#444444', borderBottomWidth: 1, }}>
                <Title>Pesquisar</Title>
            </View>

            <InputView>
                <Input
                 placeholder='Ex.: pikachu, 12'
                 value={input}
                 onChangeText={(text) => setInput(text)}
                />

                <SearchBtn onPress={() => research()}>
                    <Feather
                     name='search' 
                     size={25}
                     color='#c1c1c1'
                    />
                </SearchBtn>
            </InputView>

            { pokemon && (
                <View style={{ flex: 1, alignItems: 'center', paddingTop: '20%' }}>
                    <BtnItem onPress={() => navigation.navigate('Detalhes', pokemon)}>
                        <Img source={{ uri: pokemon.image }}/>
                                
                        <SectionRow>
                            <TextLink style={{ paddingHorizontal: 8, }}>{pokemon.name}</TextLink>
                            <TextLink style={{ paddingHorizontal: 8, }}>N° {pokemon.id}</TextLink>
                        </SectionRow>
                    </BtnItem>
                </View>
            )}

            { input === '' && !pokemon && (
                <>
                    <Subtitle>Ou explore por tipo</Subtitle>
            
                    <FlatList
                    style={{ marginBottom: -10 }}
                    contentContainerStyle={{
                        padding: 5,
                    }}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        paddingBottom: 7,
                    }}
                    numColumns={2}
                    data={types}
                    renderItem={({ item }) => <ListType data={item}/>}
                    showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </Container>
    )
}