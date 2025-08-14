DROP POLICY "Allow bucket insert"
ON storage.objects;


CREATE POLICY "Allow bucket insert auth"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'book-covers');
