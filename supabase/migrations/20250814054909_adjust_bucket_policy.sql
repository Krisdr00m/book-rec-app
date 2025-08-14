DROP POLICY "Allow bucket inserts"
ON storage.objects;

CREATE POLICY "Allow bucket insert"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'book-covers');

