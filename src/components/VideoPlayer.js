import * as React from 'react';
import ReactPlayer from "react-player";
import Container from '@mui/material/Container';

export default function VideoPlayer() {
    return (
        <Container maxWidth={false}>
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
            />
        </Container>
    );
}