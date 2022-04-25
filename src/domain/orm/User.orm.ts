import { userEntity } from '../entities/User.entity'

import { logSuccess, logError } from '../../utils/logger'

// CRUD

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
*/

export const GetAllUsers = async () => {
  try {
    logSuccess('Todo good')
    const userModel = userEntity()
    // search all users
    return await userModel.find({ isDelete: false })
  } catch (error) {
    logError(`[ORM ERROR] ${error}`)
  }
}
