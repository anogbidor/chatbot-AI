import express from 'express'
import { handleChat } from './controllers';

const router = express.Router()

router.post('/', handleChat)

export default router
