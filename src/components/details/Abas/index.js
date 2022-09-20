import React from 'react';
import { View, Text, FlatList } from 'react-native';

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
    Section,
    TypeWrapper,
    AbilitiesWrapper,
    ImgEvolutions,
    EvolutionsWrapper,
    TextEvolutions,
} from './styles';

import StatItem from '../StatItem';

export default function Abas({ route, description, names, pokemons, aba }) {
    switch (aba) {
        case 'stats':
            return(
                <Section>
                    <FlatList
                     showsVerticalScrollIndicator={false}
                     numColumns={2}
                     data={route.stats}
                     keyExtractor={(key) => key.stat.url}
                     renderItem={({ item }) => <StatItem data={item}/> }
                    />
                </Section>
          )
        case 'evolutions':
            return(
                <Section
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: 0,
                }}
                >
                    <EvolutionsWrapper>
                        <ImgEvolutions source={{ uri: pokemons[0]?.image }}/>

                        <TextEvolutions style={{ textTransform: 'capitalize', }}>{names[0]}</TextEvolutions>
                    </EvolutionsWrapper>

                    { pokemons[1] && (
                        <EvolutionsWrapper>
                            <ImgEvolutions source={{ uri: pokemons[1]?.image }}/>

                            <TextEvolutions style={{ textTransform: 'capitalize', }}>{names[1]}</TextEvolutions>
                        </EvolutionsWrapper>
                    ) }

                    { pokemons[2] && (
                        <EvolutionsWrapper>
                            <ImgEvolutions source={{ uri: pokemons[2]?.image }}/>

                            <TextEvolutions style={{ textTransform: 'capitalize', }}>{names[2]}</TextEvolutions>
                        </EvolutionsWrapper>
                    ) }
                </Section>
          )
        case 'about':
        default:
            return(
                <>
                    <Section>
                        <Text style={{ color: '#FFF', fontSize: 16 }}>{description}</Text>

                        <TypeWrapper>
                            <Text style={{ color: '#FFF', padding: 4, marginRight: 3, borderWidth:2, borderColor:'#c1c1c1', textAlign:'center', }}>
                                {route.types[0]?.type.name}
                            </Text>
                            { route.types[1]?.type.name && (
                                <Text style={{ color: '#FFF', padding: 4, marginRight: 3, borderWidth:2, borderColor:'#c1c1c1', textAlign:'center', }}>
                                    {route.types[1]?.type.name}
                                </Text>
                            )}
                        </TypeWrapper>
                    </Section>

                    <Section style={{ marginTop: 2,}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFF', }}>Habilidades</Text>

                        <AbilitiesWrapper>
                            <Text style={{ fontSize: 15, color: '#D90227', fontWeight: 'bold', textTransform: 'capitalize', }}>
                                {route.abilities[0]?.ability.name}
                            </Text>

                            <Text style={{ fontSize: 15, color: '#D90227', fontWeight: 'bold', textTransform: 'capitalize', }}>
                                {route.abilities[1]?.ability.name}
                            </Text>

                            { route.abilities[2]?.ability.name && (
                                <Text style={{ fontSize: 15, color: '#D90227', fontWeight: 'bold', textTransform: 'capitalize', }}>
                                    {route.abilities[2]?.ability.name}
                                </Text>
                            ) }
                            
                        </AbilitiesWrapper>
                    </Section>
                </>
              )
      }

}