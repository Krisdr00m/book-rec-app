import { NextRequest, NextResponse } from "next/server";

// This is the solr query so you can free type in here
export async function getSearchedBook(freeSearch: string){
    const res = await fetch('https://openlibrary.org/search.json?q=' + freeSearch);
    if (!res.ok) {
        throw new Error(`Failed to fetch search results: ${res.statusText}`);
    }
    return res.json();
}

export async function getBookByAuthor(authorName:string) {
    const res = await fetch('https://openlibrary.org/search.json?author=' + authorName);
    if (!res.ok) {
        throw new Error(`Failed to fetch book by author: ${res.statusText}`);
    }
    return res.json();
}

export async function getBookByTitle(bookTitle:string) {
    const res = await fetch('https://openlibrary.org/search.json?title=' +  bookTitle);
    if (!res.ok) {
        throw new Error(`Failed to fetch book by title: ${res.statusText}`);
    }
    return res.json();
}

export async function getCoverByID(coverID: string){
    const res = await fetch('https://covers.openlibrary.org/b/id/' + coverID + '-L.jpg');

    if (!res.ok) {
        throw new Error(`Failed to fetch cover image: ${res.statusText}`);
    }
}