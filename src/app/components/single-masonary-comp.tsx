import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from 'next/link';


interface BookMasonarySingleProps {
    book: {
        title: string;
        coverImage: string;
        indivLink: string;
        author?: string;
        first_publish_year?: number;
        genre?: string;
    }
}

let tempBook: BookMasonarySingleProps['book'] = {
    title: "Red Rising",
    coverImage: "https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg",
    indivLink: '/main-page/indiv-page/1',
}

// This component is used to display a book cover with an image in the masonary layout
export default function BookMasonarySingle({book = tempBook}: BookMasonarySingleProps) {
    return (
        <div style ={{minHeight: '200px'}}className="book-masonary-single">
            <Link href = {book.indivLink} className="book-link">
                <Paper sx={{minHeight: '200px', minWidth: '150px', maxWidth: '200px'}} square = {false} elevation={20} className="book-paper">
                     <img style={{height:'90%', width: '100%'}} src={book.coverImage} alt={book.title} className="book-cover" />
                    <h3 style = {{height: '10%'}}className="book-title">{book.title}</h3>  
                </Paper>
            </Link>
        </div>
    );
}