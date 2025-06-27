import { model, Schema } from 'mongoose'
import { INotes } from '../interfaces/notes.interface'

// Schema for Note
const noteSchema = new Schema<INotes>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      default: '',
      trim: true
    },
    category: {
      type: String,
      enum: ['personal', 'work', 'study', 'other'],
      default: 'personal'
    },
    pinned: {
      type: Boolean,
      default: false
    },
    tags: {
      label: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'gray'
      }
    }
  },

  {
    timestamps: true,
    versionKey: false
  }
)

// Model for Note
export const Note = model<INotes>('Note', noteSchema)
