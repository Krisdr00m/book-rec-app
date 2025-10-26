//ts-worksheet
import 'dotenv/config'

import { UUID } from "crypto";
import { createAuthClient } from "../src/app/lib/api/supabase";

const supabase = createAuthClient();

/*
    TODO: 
    Pull all the titles from the supaabase db
    Loop through each row and update the corrsponding information
*/

async function extract_data(){
    try{

        const {data, error} = await supabase.from('books').select('title, id');
        console.log(data);

        // if(error?.status !== '200'){

        // }
        return data;
    } catch(error){

        console.log(error);
        return null;
        throw new Error;
        
    }
}

async function alter_data(data:{id: any, title:any}[]) {

    for (const row of data){
        const formatedUrl = `test_images/${row.title}-M.jpg`
        const {data, error} = await supabase.from('books').update({coverurl: formatedUrl}).eq('id', row.id);

        console.log(data, error)
    }

    console.log('finished uploading')
}


async function fullCoverSync(){
    const extractedData = await extract_data();

    if (extractedData) {
        await alter_data(extractedData)
    } else {
        console.log("No data returned from Supabase")
    }
}

fullCoverSync()
    .then(() => console.log('Successful Run'))
    .catch((error) => console.error('Shit fucking up', error));