import React from 'react';
import styled from "styled-components/native";
import Icons from "../icons";

const Container = styled.View`
    width: 100%;
`;

const PostHeader = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const UserContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Thumb = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;

const User = styled.Text`
    font-weight: bold;
    color: #FFF;
    margin: 0 9px;
    font-size: 12px;
`;

const Picture = styled.Image`
    width: 100%;
    height: 400px;
`;

interface PostProps {
    key: string;
    thumb: string;
    user: string;
    image: string;
    likes: number;
    description: string;
}

const Post: React.FC<PostProps> = ({
    description,
    image,
    key,
    likes,
    thumb,
    user,
}) => {
    const More = Icons.More;

    return (
        <Container>
            <PostHeader>
                <UserContainer>
                    <Thumb source={{ uri: thumb }} />
                    <User>{user}</User>
                </UserContainer>
                <More />
            </PostHeader>
            <Picture source={{ uri: image }} />
        </Container>
    );
}

export default Post;