require('dotenv').config({ path: '.env' });
import { createSupaClient } from "../src/app/lib/api/supabase";
import * as fs from 'fs';
// Create a function that uploads each book individually
//Create a function that reads a file and uploads it to Supabase storage
const supabase = createSupaClient();
const filePath = '';

//This is just mock data and test to see how I wouldmanipulate the data for uploading
// const mock_data =[ {
//     author_name: [ 'Harper Lee' ],
//     title: 'To Kill a Mockingbird',
//     cover_i: 12606502,
//     first_publish_year: 1960
//   },
//   {
//     author_name: [ 'Delia Owens' ],
//     title: 'Where the Crawdads Sing',
//     cover_i: 8362947,
//     first_publish_year: 2018
//   }
// ]

// for (const book of mock_data){
//     console.log('Author:', book.author_name[0]);
//     console.log('Title:', book.title);
//     console.log('Cover ID:', book.cover_i);
//     console.log('First Publish Year:', book.first_publish_year);
// }

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


export async function uploadBook() {
    try {
        console.log('Starting to read file...');
        const file_data = await read_File();
        for (const book of file_data) {
            try{
                await supabase.from('books').insert({
                author: book.author_name[0],
                title: book.title,
                cover_i: book.cover_i,
                first_publish_year: book.first_publish_year
            });
                console.log(`logged ${book.title} by ${book.author_name[0]} successfully`);
            } catch (error) {
                console.error('Error uploading book:', error);
            }
    }
    } catch (error) {
            console.error('Process Failed:', error);
    }
}

uploadBook()
    .then(() => console.log('All books uploaded successfully.'))