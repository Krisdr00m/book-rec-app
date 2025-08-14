SELECT id, name FROM storage.objects;

INSERT INTO storage.objects (bucket_id, name, owner, created_at)
VALUES (
    'book-covers',      
    'https://th.bing.com/th/id/OIP.uJmZdZ3K1mnfbxBwvzSDtgHaEK?w=300&h=180&c=7&r=0&o=7&pid=1.7&rm=3',   
    uuid_generate_v4(),               
    now()              
);
