import { Router } from 'express'
import { report } from '../controller/controller'

export const router = Router()

router.post('/report', report)