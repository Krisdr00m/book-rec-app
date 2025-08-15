CREATE POLICY "Allow bucket insert both covers"
ON storage.objects
FOR INSERT
TO authenticated, public
WITH CHECK (bucket_id = 'Covers');