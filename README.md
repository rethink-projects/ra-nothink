<br>

![foo](https://github.com/filiperethink/ra-nothink/blob/dev/extras/logo.png?raw=true)

<br>
Esse projeto está sendo desenvolvido pelos estagiários do rethink academy, a ideia é criar um repositório para anotações de códigos ou explicações sobre alguma tecnologia.

<br>
<br>

# Design do projeto

[Link para acessar o figma](https://www.figma.com/file/Ss2atdwxFVc4Wr1xuD5kip/Nothink)

<br>

# O que vamos fazer?

Vamos criar um sistema que deve permitir que o usuário crie snippets de código de forma fácil e disponibilize para todos os usuários da plataforma.

<br>

## Requisitos

- Sistema de Autenticação.
- Sistema de rotas das paginas com Autenticação.
- Integração com o Firebase e Firestore.
- Permitir que o usuario logado Visualize lista de Categorias.
- Permitir que o usuario logado Visualize Lista de snippets por categoria.
- Permitir que o usuario logado Visualize um Snippet.
- Permitir que o usuario logado Edite apenas seus snippets.
- Permitir que o usuario logado Exclua apenas seus snippets.
- Permitir que o usuario logado Favorite qualquer snippets.
- Deploy feito na Vercel.
- Responsidade e Fidelidade ao protótipo do figma.

<br>

# O que precisamos fazer?

> Novas tarefas serão inseridas

<br>

✅ Inicializar repositório no github. \
✅ Iniciar boilerplate com React e fazer ajustes.\
✅ Configurar Firebase e Firestore.\
✅ Configurar deploy na vercel.\
✅ Implementar sistema de rotas usando `react-router-dom.`\
✅ Implementar sistema de Autenticação usando `conxtex api`.
✅ Implementar Tela de Login.
✅ Implementar Autenticação usando Firebase (Google e Gitgub).
✅ Configurando sub rotas na aplicação.
✅ Desafio Header no Dashboard.
✅ Implementar Solução do Header no Dashboard.
⬜️ Implementar Lista de Snippets usando Firestore na tela de Dashboard.

<br>

# Rodando localmente

Faça o clone do projeto

```bash
git clone git@github.com:filiperethink/ra-nothink.git
```

Acesse o diretório.

```bash
cd ra-nothink
```

Instale as dependências.

```bash
 npm install
```

Inicie o servidor na porta 3000.

```bash
npm run start
```

<br>

# Trabalhando com Github

Trazendo codigo remoto.

```bash
git pull
```

Criando sua branch

```bash
git checkout -b nome-da-sua-branch
```

Verificando status de arquivos alterados no projeto.

```bash
git status
```

Enviando codigo alterado para staged.

```js
git add .

// Adicionando apenas um arquivo.
git add ./nome-arquivo
```

Commitando arquivos em staged.

```bash
 git commit -m "Criando rotas no projeto utilizando react-router-dom"
```

Enviando codigo commitado para repositorio no github.

```js
// Se for o primeiro push você deve usar esse comando.
git push -u origin nome-da-sua-branch

// Nas outras vezes pode usar de forma simplificado.
git push
```

<br>

# Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc...

<br>

# Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

<br>

# Autores

- [@filiperethink](https://api.github.com/repos/filiperethink)
- [@gabrielgomes](https://api.github.com/repos/gabrielgomes)

<br>

# Etiquetas

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

<br>

# Variáveis de Ambiente ( Implementar\*)

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`
