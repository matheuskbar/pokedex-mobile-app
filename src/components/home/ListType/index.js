import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { TypeBtn } from '../RandomPoke/styles';

export default function ListType({ data }) {
    const navigation = useNavigation();

    return(
        <TypeBtn onPress={() => navigation.navigate('ExplorarDetalhes', data)}>
            <Text style={{ fontSize: 15, color: '#FFF', }}>{data.name}</Text>
        </TypeBtn>
    )
}
