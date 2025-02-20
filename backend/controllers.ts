import { Request, Response } from 'express';
import { fetchOpenAIResponse } from './services';

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body
    const response = await fetchOpenAIResponse(message)
    res.json({ reply: response })
  } catch (error) {
     console.error('Error fetching response:', error)
    res.status(500).json({ error: 'Failed to fetch response' })
  }
}
