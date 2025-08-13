require('dotenv').config({ path: '.env' });
import { createSupaClient } from "../src/app/lib/api/supabase";
// import {getCoverByID} from '../src/app/lib/api/book-data';
import * as fs from 'fs';

const supabase = createSupaClient();
const filePath = 'C:\Users\yenkr\OneDrive\Desktop\Coding-Shii\Python-Scripts\book-data.json';
const basePath = 'C:\Users\yenkr\OneDrive\Desktop\Coding-Shii\Python-Scripts\book_covers'
async function read_File(): Promise<any[]> {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log('File read successfully.');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
}


export async function uploadCovers(){
    try{
        console.log("reading file...");
        const data = await read_File();
        for (const book of data){
            try{
                let cover_i = book.cover_i
                let bookTitle = book.title
                if(cover_i){
                    console.log(`Uploading cover for ${book.title} by ${book.author_name[0]}`);
                    let path 
                    // const {data , error} = await supabase.storage.from('Covers').upload(`${basePath}/${cover
                    // const coverImageSmall = await getCoverByID(cover_i.toString(), 'S');
                    // const coverImageMedium = await getCoverByID(cover_i.toString(), 'M');
                }
            }catch (error){
                console.error('Error uploading cover:', error);
            }
        }
    }catch (error){
        console.error('Error reading file:', error);
    }
}