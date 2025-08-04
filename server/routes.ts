import type { Express } from "express";
import { createServer, type Server } from "http";



export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint


  const httpServer = createServer(app);
  return httpServer;
}
