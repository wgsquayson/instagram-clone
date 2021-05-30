import React from 'react';
import styled from "styled-components/native";
import Icons from "../icons";

const Container = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;
`;

const HeaderButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const HeaderButton = styled.Pressable`
    margin-left: 20px;
`;

const Header: React.FC = () => {
    const Logo = Icons.Logo;
    const Add = Icons.Add;
    const Heart = Icons.Heart;
    const Messenger = Icons.Messenger;

    return (
        <Container>
            <Logo />
            <HeaderButtonsContainer>
                <HeaderButton>
                    <Add />
                </HeaderButton>
                <HeaderButton>
                    <Heart />
                </HeaderButton>
                <HeaderButton>
                    <Messenger />
                </HeaderButton>
            </HeaderButtonsContainer>
        </Container>
    );
}

export default Header;