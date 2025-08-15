CREATE POLICY "Allow bucket inserts"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'Covers');
