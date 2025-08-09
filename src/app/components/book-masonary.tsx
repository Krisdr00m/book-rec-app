import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import BookMasonarySingle from './single-masonary-comp';


let books = Array.from({length: 50}, (_, i) =>({
    title: 'Red Rising ${i}' ,
    indivLink: '/',
    coverImage: 'https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg',
}))

export default function BookMasonary() {
    return(
        <Box sx={{ width: '100%', height: '90%'}}>
            <Masonry
                 columns={{ xs: 3, sm: 4, md: 5, lg: 6, xl: 7 }}
                spacing={5}
                sx={{
                    // maxHeight: 300,
                    padding: '16px 24px',
                }}
            >
                {books.map((BookComponent, index) => (
                        <BookMasonarySingle key = {index} book={BookComponent} />
                ))}
            </Masonry>
        </Box>
    )
}