import React from 'react';
import {
    Container,
    Stories,
    Posts,
} from "./styles";

import {
    Header,
    Storie,
    Post
} from "../../ui/components";

const Home: React.FC = () => {
    const storiesData = [
        {
            key: "1",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/7437a094-d2dd-45d7-b025-174b54c83773-profile_image-70x70.png",
            label: "Seu story",
            hasBeenWatched: true,
            isFirstChild: true
        },
        {
            key: "2",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/514314c8-7667-4d6a-9c73-924c2ad48b2b-profile_image-70x70.png",
            label: "Dilera",
            hasBeenWatched: false,
        },
        {
            key: "3",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/81f5dc5c-421f-41f1-b6ad-01deb9cd1daa-profile_image-70x70.png",
            label: "FlowPodcast",
            hasBeenWatched: false,
        },
        {
            key: "4",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-300x300.png",
            label: "Ninja",
            hasBeenWatched: false,
        },
        {
            key: "5",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/c720d5c7-0e01-4840-992b-27459f20dadb-profile_image-70x70.png",
            label: "lucascharmoso",
            hasBeenWatched: false,
        },
        {
            key: "6",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/41dbfc92-40cd-414f-bbde-159297b2ab47-profile_image-70x70.png",
            label: "PatoPapao",
            hasBeenWatched: false,
        }
    ];

    const postsData = [
        {
            key: "1",
            thumb: "https://static-cdn.jtvnw.net/jtv_user_pictures/7437a094-d2dd-45d7-b025-174b54c83773-profile_image-70x70.png",
            user: "quayson",
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/7437a094-d2dd-45d7-b025-174b54c83773-profile_image-70x70.png",
            likes: 100,
            description: "garoto de aplicativo"
        }
    ];


    return (
        <Container>
            <Header />
            <Stories
                contentContainerStyle={{
                    alignItems: "flex-start",
                    paddingHorizontal: 10,
                }} 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={storiesData}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <Storie 
                        key={item.key} 
                        thumb={item.thumb} 
                        label={item.label} 
                        hasBeenWatched={item.hasBeenWatched} 
                        isFirstChild={item.isFirstChild}
                    />
                )}
            />
            <Posts
                contentContainerStyle={{
                    width: "100%",
                    alignItems: 'flex-start',
                    marginTop: 10,
                }} 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={postsData}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <Post
                        key={item.key} 
                        thumb={item.thumb} 
                        description={item.description}
                        image={item.image}
                        likes={item.likes}
                        user={item.user}
                    />
                )}
            />
        </Container>
    );
}

export default Home;