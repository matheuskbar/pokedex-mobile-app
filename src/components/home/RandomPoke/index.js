import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { BtnItem, Img, SectionRow, TextLink } from './styles';

import ModalItem from '../../explore/ModalItem';

export default function RandomPoke({ data }) {
    const [showModal, setShowModal] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setShowModal(false);
        }, [])
    )

    return(
        <>
            <BtnItem onPress={() => setShowModal(true)}>
                <Img source={{ uri: data.image }}/>
                        
                <SectionRow>
                    <TextLink style={{ paddingHorizontal: 8, }}>{data.name}</TextLink>
                    <TextLink style={{ paddingHorizontal: 8, }}>{data.id}m</TextLink>
                </SectionRow>
            </BtnItem>

            <Modal visible={showModal} transparent={true} animationType='fade'>
                <ModalItem poke={data} close={() => setShowModal(false)}/>
            </Modal>
        </>
    )
}