import { kataEntity } from '../entities/Kata.Entity'

import { logSuccess, logError } from '../../utils/logger'

// CRUD

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
*/

export const GetAllUsers = async () => {
  try {
    logSuccess('Todo good')
    const kataModel = kataEntity()
    // search all users
    return await kataModel.find({ isDelete: false })
  } catch (error) {
    logError(`[ORM ERROR] ${error}`)
  }
}
