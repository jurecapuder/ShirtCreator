import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OpenAI_API_KEY
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES"})
});

router.route('/').post(async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong"})
  }
})

export default router