import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Serve static files from the dist/public directory (built React app)
app.use(express.static(path.join(__dirname, '..', 'dist', 'public')));

// Serve attached assets (like resume PDF)
app.use('/assets', express.static(path.join(__dirname, '..', 'attached_assets')));

// Handle React routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});