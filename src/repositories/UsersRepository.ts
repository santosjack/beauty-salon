import prisma from '../database/db'
import { ICreate } from '../interfaces/UsersInterface'

class UsersRepository {
  async create({ name, email, password }: ICreate) {
    const result = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    })
    return result
  }

  async findUserByEmail(email: string) {
    const result = await prisma.users.findFirst({
      where: {
        email,
      },
    })
    return result
  }
}

export { UsersRepository }
