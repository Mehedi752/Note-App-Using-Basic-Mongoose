import express, { Request, Response } from 'express'
import { User } from '../models/user.model'


export const userRoutes = express.Router()

userRoutes.post('/create-user', async (req: Request, res: Response) => {
  const body = req.body

  const user = await User.create(body)

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    user
  })
})

userRoutes.get('/', async (req: Request, res: Response) => {
  const users = await User.find()

  res.status(201).json({
    success: true,
    message: 'Users fetched successfully',
    users
  })
})

userRoutes.get('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await User.findById(userId)

  res.status(201).json({
    success: true,
    message: 'User fetched successfully',
    user
  })
})

userRoutes.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  await User.findByIdAndDelete(userId)

  res.status(201).json({
    success: true,
    message: 'User deleted successfully'
  })
})

userRoutes.patch('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const updatedBody = req.body

  const user = await User.findByIdAndUpdate(userId, updatedBody, {
    new: true,
  })
    res.status(201).json({
        success: true,
        message: 'User updated successfully',
        user
    })
})

