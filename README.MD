
# Sistema de envio de email

Um serviço de email utilizando o mailtrao para fins de testes. Caso queira para produção só alterar o provedor de e-mail para uma da sua preferência.

## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`HOST`
`PORT`
`USER`
`PASS`




## Documentação da API

#### Inserindo e-mail

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `{name, email, password}` | `JSON` | Insira os valores de cada como parametro  json. Ex: {"name": "Plebeu", "email": "dev@plebeu", "password": "1234"}...

Retorna um código de erro 201 para sucesso.


## Stack utilizada

**Back-end:** Node, Express


![Logo](https://cdn.discordapp.com/attachments/560251522127101972/993340182491320432/standard_1.gif)


