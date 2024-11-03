# Vite React Starter

Vite based React application with additional customization.

This starter application includes additional setup after running the following React template.

```sh
pnpm create vite --template react-ts .
```

## Features

1.  Testing libraries

- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Mock Service Worker ](https://mswjs.io/)

2.  Linting and formatting libraries

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

3.  Various Eslint packages with custom configuration.

4.  Visual Studio Code configuration.

- Enable debugging in WSL2 with launch profile `Debug WSL Chrome`
- Use Prettier as project formatter.

## Prerequisites

1.  Install these application locally.

- `pnpm`

## Setup

1.  Download this project
2.  Extract the content to a new directory, rename it and cd the directory.
3.  Update your application variables using the following commands.

```sh
pnpm pkg set 'name'='YOUR_APP' -ws
pnpm version 0.0.1 --no-git-tag-version
```

4.  Install all dependencies using the following commands.

```sh
pnpm install
```
