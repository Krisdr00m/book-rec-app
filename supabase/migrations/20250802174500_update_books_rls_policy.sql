CREATE POLICY "Allow anonymous inserts"
ON books
FOR INSERT
TO public
WITH CHECK (true);
