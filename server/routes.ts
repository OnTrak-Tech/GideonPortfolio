import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      // Path to the uploaded CV file
      const resumePath = path.resolve(process.cwd(), "attached_assets", "Gideon_Adjei_CV_1753941897240.pdf");
      
      // Check if file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ message: "Resume file not found" });
      }

      // Set appropriate headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Gideon_Adjei_CV.pdf"');
      
      // Create read stream and pipe to response
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
      
      fileStream.on('error', (error) => {
        console.error('Error streaming file:', error);
        res.status(500).json({ message: "Error downloading resume" });
      });
      
    } catch (error) {
      console.error('Resume download error:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
