import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
    Title, 
    Subtitle,
    SectionRow,
    SectionTitle,
    Link,
    TextLink,
    TypeBtn,
} from './styles';

import { ApiContext } from '../../contexts/api';
import RandomPoke from '../../components/home/RandomPoke';
import ListType from '../../components/home/ListType';

export default function Home() {
    const navigation = useNavigation();

    const { types } = useContext(ApiContext);

    const [random, setRandom] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function loadRandom() {
            setRandom('');
            for(let i = 1; i < 6; i++) {
                let randNum = Math.floor(Math.random() * 199 + 1)
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(randNum)}/`);
                let randomPokemon = {
                    name: response.data.name,
                    id: response.data.id,
                    image: response.data.sprites.other["official-artwork"].front_default,
                    types: response.data.types,
                    abilities: response.data.abilities,
                    stats: response.data.stats,
                    species: response.data.species.url,
                }
                setRandom(oldArray => [...oldArray, randomPokemon])
            }
        }

        async function loadPage() {
            await loadRandom();

            setLoading(false);
        }

        loadPage();
        
    }, [])

    return(
        <Container>
            <Title>Pokédex</Title>
            <Subtitle>Explore esse mundo!</Subtitle>

            { loading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color='#D90227' size={30}/>
                </View>
            ) : (
                <>
                    <SectionRow>
                        <SectionTitle>Por perto</SectionTitle>

                        <Link onPress={() => navigation.navigate('Explorar')}>
                            <TextLink>Ver todos</TextLink>
                        </Link>
                    </SectionRow>

                    <FlatList
                    style={{ marginRight: -10 }}
                    data={random}
                    renderItem={({ item }) => <RandomPoke data={item} key={item.id}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />

                    <SectionRow>
                        <SectionTitle>Explore por tipo</SectionTitle>

                        <Link>
                            <TextLink>Ver todos</TextLink>
                        </Link>
                    </SectionRow>

                    <FlatList 
                     style={{ height: 250, marginBottom: -10 }}
                     data={types}
                     renderItem={({ item }) => <ListType data={item}/>}
                    />
                </>
            ) }
        </Container>
    )
}
