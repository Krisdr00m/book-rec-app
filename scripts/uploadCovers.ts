require('dotenv').config({ path: '.env' });
import { createSupaClient } from "../src/app/lib/api/supabase";
import {getCoverByID} from '../src/app/lib/api/book-data';
import * as fs from 'fs';

const supabase = createSupaClient();
const filePath = '';

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
                if(cover_i){
                    const coverImageSmall = await getCoverByID(cover_i.toString(), 'S');
                    const coverImageMedium = await getCoverByID(cover_i.toString(), 'M');
                }
            }catch (error){
                console.error('Error uploading cover:', error);
            }
        }
    }catch (error){
        console.error('Error reading file:', error);
    }
}