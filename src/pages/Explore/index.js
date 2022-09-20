import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import PokeItem from '../../components/explore/PokeItem';

import { 
    Container, 
    Title, 
    Subtitle, 
    SectionRow, 
    Link, 
    TextLink, 
} from './styles';

export default function Explore({ route }) {
    const navigation = useNavigation();

    const [pokemonList, setPokemonList] = useState([]);
    const [filter, setFilter] = useState(true)

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadList() {
            setLoading(true);
            setPokemonList([]);
            if(route.params == undefined) {
                for(let i = 1; i < 21; i++) {
                    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                    let pokemon = {
                        name: response.data.name,
                        id: response.data.id,
                        image: response.data.sprites.other.home.front_default,
                        types: response.data.types,
                        abilities: response.data.abilities,
                        stats: response.data.stats,
                        species: response.data.species.url,
                    }
                    setPokemonList(oldArray => [...oldArray, pokemon])
                }
            } else {
                let type = await axios.get(route.params?.url);

                for(let i = 0; i < 20; i++) {
                    await axios.get(type.data.pokemon[i].pokemon.url).then((value) => {
                        let pokemon = {
                            name: value.data.name,
                            id: value.data.id,
                            image: value.data.sprites.other.home.front_default,
                            types: value.data.types,
                            abilities: value.data.abilities,
                            stats: value.data.stats,
                            species: value.data.species.url,
                        }
                        setPokemonList(oldArray => [...oldArray, pokemon])
                    })
                    
                }
            }
            setLoading(false);
        }

        loadList();
        
    }, [route, filter])

    return(
        <Container>
            <Title>Explorar</Title>
            <Subtitle>Lista da sua Pokédex</Subtitle>

            <SectionRow>
                <Link onPress={() => {
                    route.params = undefined
                    setFilter(!filter)
                }}>
                    <TextLink>Ordem Pokédex</TextLink>
                </Link>

                <Link onPress={() => navigation.navigate('Pesquisar')}>
                    <TextLink>Por Tipo</TextLink>
                </Link>
            </SectionRow>

            { loading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color='red' size={50}/>
                </View>
            ) : (
                <FlatList
                 data={pokemonList}
                 showsVerticalScrollIndicator={false}
                 renderItem={({ item }) => <PokeItem data={item}/>}
                />
            ) }
        </Container>
    )
}