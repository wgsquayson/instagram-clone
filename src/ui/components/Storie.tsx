import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";

const Container = styled.View<{ isFirstChild?: boolean; }>`
    align-items: center;
    justify-content: center;
    margin-left: ${({ isFirstChild }) => isFirstChild ? 0 : 16}px;
`;

const Thumbnail = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border-width: 3px;
    border-color: #000;
`;

const Label = styled.Text`
    color: #FFF;
    font-size: 11.5px;
    margin-top: 3px;
`;

const Border = styled(LinearGradient)`
    width: 65px;
    height: 65px;
    border-radius: 38px;
    align-items: center;
    justify-content: center;
`;

interface StorieProps {
    key: string;
    thumb: string;
    label: string;
    hasBeenWatched: boolean;
    isFirstChild: boolean;
}

const Storie: React.FC<StorieProps> = ({
    key,
    label,
    thumb,
    hasBeenWatched,
    isFirstChild,
}) => {
    if (hasBeenWatched === true) {
        return (
            <Container key={key} isFirstChild={isFirstChild}>
                <Border colors={["#DCDCDC", "#DCDCDC"]}>
                    <Thumbnail source={{ uri: thumb }} />
                </Border>
                <Label>{label}</Label>
            </Container>
        )
    }

    return (
        <Container key={key} isFirstChild={isFirstChild}>
            <Border colors={["#833AB4", "#C13584", "#F77737"]}>
                <Thumbnail source={{ uri: thumb }} />
            </Border>
            <Label>{label}</Label>
        </Container>
    );
}

export default Storie;