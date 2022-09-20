import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

import Abas from '../../components/details/Abas';

import { 
    Container, 
    Title, 
    BtnBack, 
    ImgWrapper, 
    Img, 
    Main, 
    Header, 
    Nav, 
    BtnAba, 
    TextBtn,
} from './styles';

export default function Details({ route }) {
    const navigation = useNavigation();
    const [abas, setAbas] = useState('sobre')

    const [description, setDescription] = useState('');
    const [speciesPage, setSpeciesPage] = useState({});
    const [evolutionChain, setEvolutionChain] = useState({});
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        setLoading(true);
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })

        async function loadInfo() {
            await axios.get(route.params?.species).then((value) => {
                setSpeciesPage(value.data)
                setDescription(value.data.flavor_text_entries[0]?.flavor_text)
                loadEvolutions(value.data);
            }).catch((error) => console.log('Algo deu errado: ' + error))
        }

        async function loadEvolutions(data) {
            setEvolutionChain({});

            let url = data.evolution_chain.url
            await axios.get(url).then((value) => {
                setEvolutionChain(value.data);
                showsEvolutions(value.data);
            }).catch((error) => console.log('Algo deu errado: ' + error))

            setLoading(false);
        }

        loadInfo();
    }, [])

    async function showsEvolutions(data) {
        setPokemons([]);

        setNames([]);

        let name1 = data.chain.species.name;
        let name2 = data.chain.evolves_to[0]?.species.name;
        let name3 = data.chain.evolves_to[0]?.evolves_to[0]?.species?.name;

        setNames([name1, name2, name3]);

        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name1}/`).then((value) => {
            let pokemon = {
                name: value.data.name,
                id: value.data.id,
                image: value.data.sprites.other.home.front_default
            }

            setPokemons(oldArray => [...oldArray, pokemon])
        })

        let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name2}/`);
        let pokemon = {
            name: pokemon2.data.name,
            id: pokemon2.data.id,
            image: pokemon2.data.sprites.other.home.front_default
        }

        setPokemons(oldArray => [...oldArray, pokemon])

        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name3}/`).then((value) => {
            let pokemon = {
                name: value.data.name,
                id: value.data.id,
                image: value.data.sprites.other.home.front_default
            }

            setPokemons(oldArray => [...oldArray, pokemon])
        })

        setLoading(false);
    }

    return (
        <Container>
            <BtnBack onPress={() => {
                navigation.getParent().setOptions({ 
                    tabBarStyle: { 
                        display: 'flex',
                        backgroundColor: '#D90227',
                        borderTopWidth: 0,
                        paddingTop: 4,
                        minHeight: 52,
                    } 
                })
                navigation.goBack()
            }}>
                <Icon name='arrow-back' color='#444' size={35}/>
            </BtnBack>

            <ImgWrapper>
                <Img source={{ uri: route.params?.image }}/>
            </ImgWrapper>

            <Main>
                <Header>
                    <Title>{route.params?.name}</Title>

                    <Title>N° {route.params?.id}</Title>
                </Header>

                <Nav>
                    <BtnAba onPress={() => setAbas('about')}>
                        <TextBtn>Sobre</TextBtn>
                    </BtnAba>

                    <BtnAba onPress={() => setAbas('stats')}>
                        <TextBtn>Status</TextBtn>
                    </BtnAba>

                    <BtnAba onPress={() => setAbas('evolutions')}>
                        <TextBtn>Evoluções</TextBtn>
                    </BtnAba>
                </Nav>
                
                { loading ? (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <ActivityIndicator color='red' size={25}/>
                    </View>
                ) : (
                    <Abas
                     description={description}
                     names={names}
                     pokemons={pokemons}
                     aba={abas}
                     route={route.params}
                    />
                    
                ) }
            </Main>
        </Container>
    );
}
