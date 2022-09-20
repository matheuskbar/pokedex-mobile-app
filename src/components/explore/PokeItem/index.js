import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import ModalItem from '../ModalItem'
import  { BtnItem, Img, Section, TextLink, SectionRow, ModalDetail } from './styles';

export default function PokeItem({ data }) {
    const [showModal, setShowModal] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setShowModal(false);
        }, [])
    )

    return(
        <View style={{ borderBottomColor: '#444444', borderBottomWidth: 1, marginBottom: 8, }}>
            <BtnItem onPress={() => setShowModal(true)}>
                <Img source={{ uri: data.image }}/>
                                
                <Section>
                    <TextLink style={{ fontSize: 17, color: '#FFF', }}>{data.name}</TextLink>
                    
                    <TextLink style={{ fontSize: 17, color: '#FFF' }}>#{data.id}</TextLink>
                </Section>
            </BtnItem>
            <ModalDetail visible={showModal} transparent={true} animationType='slide'>
                <ModalItem poke={data} close={() => setShowModal(false)}/>
            </ModalDetail>
        </View>
    )
}
