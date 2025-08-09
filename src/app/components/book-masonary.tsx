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
        <Box sx={{ width: '100%', height: '90%', overflowY: 'auto' }}>
            <Masonry
                // columns={3}
                 columns={{ xs: 1, sm: 2, md: 3 }}

                spacing={5}
                sx={{
                    // maxHeight: 300,
                    // padding: '16px 24px',
                }}
                //  columns={{ xs: 1, sm: 2, md: 3 }}
            >
                {books.map((BookComponent, index) => (
                        <BookMasonarySingle key = {index} book={BookComponent} />
                ))}
            </Masonry>
        </Box>
    )
}