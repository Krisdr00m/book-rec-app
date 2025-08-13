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

function loopFolder(path: string, book_title: string, size: string): string{
    let imagePath = ''
    fs.readdir(path, (err, files) =>{
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if(size === 'S'){
                if (file.includes(book_title) && (file.includes('-S.jpg'))){
                    imagePath = `${path}/${file}`;
                    return imagePath;
                }
            }
            else{
                if (file.includes(book_title) && (file.includes('-M.jpg'))){
                    imagePath = `${path}/${file}`;
                    return imagePath;;
                }
        }

        }
    );
})
    return imagePath;
}

async function uploadSupabase(coverImageUrl: string, bookTitle: string) {
    let fileBuffer = await fs.readFileSync(coverImageUrl);
    const res = await supabase.storage.from('Covers').upload(coverImageUrl, fileBuffer, { 
        contentType: 'image/jpeg',
        upsert: true,
    });
    
    if(res.data){
        console.log(`Successfully uploaded cover for ${bookTitle}`);
    }
    else if (res.error) {
        console.error(`Error uploading small cover for ${bookTitle}:`, res.error);
    } else {
        console.log(`Successfully uploaded small cover for ${bookTitle}`);
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
                    // const {data , error} = await supabase.storage.from('Covers').upload(`${basePath}/${cover
                    const coverImageSmall =  loopFolder(basePath, bookTitle, 'S');
                    if (coverImageSmall != '') {
                        await uploadSupabase(coverImageSmall, bookTitle);

                    }
                    else{
                        console.log(`No small cover found for ${bookTitle}`);
                    }

                    const coverImageMedium = loopFolder(basePath, bookTitle, 'M');
                    if (coverImageMedium != '') {
                        await uploadSupabase(coverImageMedium, bookTitle);
                    } else {
                        console.log(`No medium cover found for ${bookTitle}`);
                    }
                }
            }catch (error){
                console.error('Error uploading cover:', error);
            }
        }
    }catch (error){
        console.error('Error reading file:', error);
    }
}