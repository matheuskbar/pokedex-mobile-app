import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title, Value } from './styles';

export default function StatItem({ data }) {
    return (
        <Container>
            <Title>{data.stat.name}</Title>
            <Value>{data.base_stat}</Value>
        </Container>
    );
}
