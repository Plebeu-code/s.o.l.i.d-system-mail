import { uuid } from "uuidv4";

export class User {
  public id: string;

  public name: string;
  public email: string;
  public password: string;

  construtor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = uuid();
    }
  }
}
