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
        <div style ={{minHeight: '200px'}}className="book-masonary-single">
            <a href={book.indivLink} className="book-link">
                <Paper sx={{minHeight: '200px', minWidth: '150px', maxWidth: '200px'}} square = {false} elevation={20} className="book-paper">
                     <img style={{height:'90%', width: '100%'}} src={book.coverImage} alt={book.title} className="book-cover" />
                    <h3 style = {{height: '10%'}}className="book-title">{book.title}</h3>  
                
                    {/* <img style={{height:'90%'}} src={book.coverImage} alt={book.title} className="book-cover" />
                    <h3 style = {{height: '10%'}}className="book-title">{book.title}</h3>   */}
                </Paper>

            </a>
        </div>
    );
}