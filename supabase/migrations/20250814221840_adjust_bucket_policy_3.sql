DROP POLICY "Allow bucket insert auth"
ON storage.objects;


CREATE POLICY "Allow bucket insert both"
ON storage.objects
FOR INSERT
TO authenticated, public
WITH CHECK (bucket_id = 'book-covers');