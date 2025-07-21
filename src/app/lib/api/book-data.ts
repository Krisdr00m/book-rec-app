import { NextRequest, NextResponse } from "next/server";


export async function getSearchedBook(title: string){
    const res = await fetch('https://openlibrary.org/search.json?q=' + title);
    return res.json();
}