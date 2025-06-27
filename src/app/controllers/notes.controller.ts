import express, { Request, Response } from 'express'
import { Note } from '../models/notes.model'

export const notesRoutes = express.Router()

notesRoutes.post('/create-note', async (req: Request, res: Response) => {
  const body = req.body

  const note = await Note.create(body)

  res.status(201).json({
    success: true,
    message: 'Note created successfully',
    note
  })
})

notesRoutes.get('/', async (req: Request, res: Response) => {
  const notes = await Note.find()

  res.status(201).json({
    success: true,
    message: 'Notes fetched successfully',
    notes
  })
})

notesRoutes.get('/:id', async (req: Request, res: Response) => {
  const noteId = req.params.id
  const note = await Note.findById(noteId)

  res.status(201).json({
    success: true,
    message: 'Note fetched successfully',
    note
  })
})

notesRoutes.delete('/:id', async (req: Request, res: Response) => {
  const noteId = req.params.id
  await Note.findByIdAndDelete(noteId)

  res.status(201).json({
    success: true,
    message: 'Note deleted successfully'
  })
})

notesRoutes.patch('/:id', async (req: Request, res: Response) => {
  const noteId = req.params.id
  const updatedBody = req.body

  const note = await Note.findByIdAndUpdate(noteId, updatedBody, {
    new: true,
  })
    res.status(201).json({
        success: true,
        message: 'Note updated successfully',
        note
    })
})