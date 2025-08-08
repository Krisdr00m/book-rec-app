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
                <img src={book.coverImage} alt={book.title} className="book-cover" />
                <h3 className="book-title">{book.title}</h3>
            </a>
        </div>
    );
}