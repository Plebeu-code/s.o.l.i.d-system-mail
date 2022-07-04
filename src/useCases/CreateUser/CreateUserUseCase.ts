import { User } from "../../entities/User"
import { IMailProvider } from "../../providers/IMailProvider"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists) {
      throw new Error("User already exists.")
    }

// @ts-ignore
    const user = new User(data)
    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe da Flame agradece.",
        email: "developer@flame.out",
      },
      subject: "Seja bem-vindo a ao sistema de desenvolvimento da Flame.out.",
      body: "<h1>Sistema de desenvolvimento da flame. \n </h1> <a href='https://discord.gg/xnAyKtWMDz'>Acesse o nosso Discord</a>",
    })
  }
}