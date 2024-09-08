# TV.APP - UTRIP Test

Este projeto é uma aplicação frontend para listagem de séries dividas por gênero. Ao clicar em uma série, a página de detalhes será aberta, exibindo o nome, o ano, os gêneros que a série se enquadra, além da lista de episódios agrupados por temporadas. O projeto é responsivo e  foi desenvolvido utilizando React + Vite + Typescript + Scss. Rotas de minha lista, favoritos e perfil do usuário não foram implementadas. 

## Estrutura do Projeto

- **`/assets`**: Arquivos estáticos.
- **`/components`**: Componentes reutilizáveis.
- **`/pages`**: Páginas da aplicação.
- **`/services`**: Função para chamadas à API.
- **`/types`**: Definições de tipos.
- **`/utils`**: Funções utilitárias para simplificar o código.

## Serviços Criados

### fetchFromApi
 Função que realiza chamadas para API `https://www.tvmaze.com/api`. Dos endpoints disponíveis foram utilizados a lista de séries e detalhes de uma série, lista de temporadas e episódios com base no parâmetro `id`.

## Como Executar o Projeto

1. Clone o repositório e entre na pasta do projeto:
   ```bash
   git clone git@github.com:vanessacreis/utrip-test.git
   cd utrip-test
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a aplicação:
   ```bash
   npm install
   ``` 
4. A aplicação abre por padrão na porta 3000. Acesse http://localhost:3000/
