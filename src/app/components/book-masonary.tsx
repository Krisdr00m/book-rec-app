import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import BookMasonarySingle from './single-masonary-comp';
import { title } from 'process';

let books = Array.from({length: 50}, (_, i) =>({
    title: 'Red Rising ${i}' ,
    indivLink: '/',
    coverImage: 'https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg',
}))

export default function BookMasonary() {
    return(
        <Box sx={{ width: '100%', height: 500, overflowY: 'auto' }}>
            <Masonry
                columns={3}
                spacing={2}
                sx={{
                    '& > div': {
                        height: 200,
                    },
                }}
            >
                {books.map((BookComponent, index) => (
                    <Paper key={index} elevation={3}>
                        <BookMasonarySingle book={BookComponent} />
                    </Paper>
                ))}
            </Masonry>
        </Box>
    )
}