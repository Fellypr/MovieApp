# Projeto de Registro de Usuário e Gerenciamento de Filmes

## Descrição do Projeto

Este projeto é uma aplicação web que permite o registro de usuários, autenticação e visualização de detalhes de filmes utilizando React no front-end e uma API em .NET no back-end.

## Tecnologias Utilizadas

### Front-end:
- React
- Axios
- React Router
- CSS Modules
- React Icons

### Back-end:
- .NET Core
- SQL Server
- BCrypt para hashing de senhas

## Funcionalidades

### Registro de Usuário
- Registro de novos usuários com validação de e-mail e senha.
- Hashing de senhas utilizando BCrypt.

### Login de Usuário
- Autenticação de usuários registrados.
- Exibição de mensagens de erro em caso de falha na autenticação.

### Visualização de Filmes
- Exibição de uma lista de filmes com dados da API The Movie Database (TMDb).
- Detalhes individuais dos filmes, incluindo título, resumo, data de lançamento, avaliação e orçamento.

## Estrutura do Projeto

### Front-end:
- `Registro.js`: Componente para registro de novos usuários.
- `HomeLogin.js`: Componente para login de usuários.
- `Details.js`: Componente para exibição de detalhes de um filme.
- `Container.js`: Componente que exibe a lista de filmes.
- `Navbar.js`: Barra de navegação com pesquisa e navegação entre as páginas.
- `Card.js`: Componente de cartão que exibe informações básicas do filme.

### Back-end:
- `RegistroDeUsuarioController.cs`: Controlador para registro e login de usuários.
- `Registro.cs`: Modelo de dados para usuários, incluindo validações.
- Configuração de CORS: Permite chamadas de diferentes origens.

## Instruções de Uso

### Configuração do Front-end

Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
```

Navegue até a pasta do front-end:
```bash
cd caminho/para/front-end
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm start
```

### Configuração do Back-end

Navegue até a pasta do back-end:
```bash
cd caminho/para/back-end
```

Configure a string de conexão no `appsettings.json`.

Execute a aplicação:
```bash
dotnet run
```

## Executando a Aplicação

Acesse `http://localhost:3000` para abrir a aplicação no navegador.

Registre um novo usuário ou faça login com um usuário existente.

Navegue pelos filmes e visualize os detalhes.

## API Utilizada

- The Movie Database (TMDb): Utilizada para obter os dados dos filmes.

## Autores

- **Desenvolvedor Front-end**: [Seu Nome]
- **Desenvolvedor Back-end**: [Seu Nome]

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
