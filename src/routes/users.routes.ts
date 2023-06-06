import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'

class UsersRoutes {
  private router: Router
  private usersController: UsersController
  constructor() {
    this.router = Router()
    this.usersController = new UsersController()
  }

  getRoutes() {
    this.router.post('/', this.usersController.store.bind(this.usersController))
    this.router.put('/', this.usersController.update.bind(this.usersController))
    return this.router
  }
}

export { UsersRoutes }
