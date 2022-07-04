import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreUserRepository } from "../../repositories/implementations/PostgressUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgreUserRepository = new PostgreUserRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgreUserRepository,
  mailtrapMailProvider
)


const createUserControlle = new CreateUserController(
  createUserUseCase
)

export { createUserControlle, createUserUseCase }