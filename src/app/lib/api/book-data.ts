import { NextRequest, NextResponse } from "next/server";

// This is the solr query so you can free type in here
export async function getSearchedBook(freeSearch: string){
    const res = await fetch('https://openlibrary.org/search.json?q=' + freeSearch);
    return res.json();
}

export async function getBookByAuthor(authorName:string) {
    const res = await fetch('https://openlibrary.org/search.json?author=' + authorName);
    return res.json();
}

export async function getBookByTitle(bookTitle:string) {
    const res = await fetch('https://openlibrary.org/search.json?title=' +  bookTitle);
    return res.json();
}