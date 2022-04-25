import mongoose from 'mongoose'

export const kataEntity = () => {
  const kataSchema = new mongoose.Schema(
    {
      name: String,
      chances: Number,
      date: Date,
      description: String,
      level: Number,
      user: Object,
      valoration: Number
    }
  )
  return mongoose.model('katas', kataSchema)
}
