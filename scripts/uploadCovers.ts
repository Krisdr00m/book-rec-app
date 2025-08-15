require('dotenv').config({ path: '.env' });

import { createAuthClient } from "../src/app/lib/api/supabase";
import {promises as fs} from 'fs';

const supabase = createAuthClient();
const filePath = '';
const basePath = ''

async function read_File(): Promise<any[]> {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File read successfully.');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
}

async function loopFolder(path: string, book_title: string, size: string): Promise<string>{
    let imagePath = ''
    const files = await fs.readdir(path);

    for (const file of files){
        if(size === 'S'){
            if (file.includes(book_title.replace(/\s+/g, "_")) && (file.includes('_S.jpg'))){
                imagePath = `${path}/${file}`;
                console.log(imagePath)
                return imagePath;
            }
        }
        else{
            if (file.includes(book_title.replace(/\s+/g, "_")) && (file.includes('_M.jpg'))){
                imagePath = `${path}/${file}`;
                return imagePath;;
            }
    }
    }
    return imagePath;
}

async function uploadSupabase(coverImageUrl: string, bookTitle: string, size: string) {
    let fileBuffer = await fs.readFile(coverImageUrl);
    console.log(fileBuffer)
    const res = await supabase.storage.from('book-covers').upload(`test_images/${bookTitle}-${size}.jpg`, fileBuffer, { 
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
                    const coverImageSmall =  await loopFolder(basePath, bookTitle, 'S');
                    console.log(coverImageSmall)
                    if (coverImageSmall != '') {
                        await uploadSupabase(coverImageSmall, bookTitle, 'S');

                    }
                    else{
                        console.log(`No small cover found for ${bookTitle}`);
                    }

                    const coverImageMedium = await loopFolder(basePath, bookTitle, 'M');
                    if (coverImageMedium != '') {
                        await uploadSupabase(coverImageMedium, bookTitle, 'M');
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

uploadCovers()
    .then(() => console.log('All covers uploaded successfully.'))
    .catch((error) => console.error('Error in uploadCovers:', error));