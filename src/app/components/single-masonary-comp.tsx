import * as React from 'react';
import Paper from '@mui/material/Paper';



interface BookMasonarySingleProps {
    book: {
        title: string;
        coverImage: string;
        indivLink: string;
    }
}

let tempBook: BookMasonarySingleProps['book'] = {
    title: "Red Rising",
    coverImage: "https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg",
    indivLink: "/"
}

export default function BookMasonarySingle({book = tempBook}: BookMasonarySingleProps) {
    return (
        <div className="book-masonary-single">
            <a href={book.indivLink} className="book-link">
                <Paper square = {false} elevation={0} className="book-paper">
                    <img style = {{height: '50%'}} src={book.coverImage} alt={book.title} className="book-cover" />
                    <h3 className="book-title">{book.title}</h3>  
                </Paper>

            </a>
        </div>
    );
}