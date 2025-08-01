import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Resume download route
app.get('/api/resume/download', (req, res) => {
  try {
    const resumePath = path.resolve(process.cwd(), 'attached_assets', 'Gideon_Adjei_CV_1753941897240.pdf');
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ message: 'Resume file not found' });
    }
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Gideon_Adjei_CV.pdf"');
    const fileStream = fs.createReadStream(resumePath);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Serve static files
app.use(express.static('dist/public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/public/index.html'));
});

export default app;