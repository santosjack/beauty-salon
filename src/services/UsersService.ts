import { hash } from 'bcrypt'
import { ICreate } from '../interfaces/UsersInterface'
import { UsersRepository } from '../repositories/UsersRepository'

class UsersService {
  private usersRepository: UsersRepository

  constructor() {
    this.usersRepository = new UsersRepository()
  }

  async create({ name, email, password }: ICreate) {
    const findUser = await this.usersRepository.findUserByEmail(email)

    if (findUser) {
      throw new Error('User already exists')
    }

    const hashPassword = await hash(password, 10)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    })
    return user
  }
}

export { UsersService }
