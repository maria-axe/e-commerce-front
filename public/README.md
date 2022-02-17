# Desafio Front-end WebJump

Esse documento tem o intuito de mostrar o que foi feito no desenvolvimento do desafio. Descrever brevemente sobre as tecnologias e soluções adotadas e, por fim, explicar como o projeto pode ser rodado. 

## Layout 

O desafio foi tornar o layout em uma página funcional, no começo do desafio a atenção foi concentrada na fidelidade ao layout e organização da estrutura das pastas. 

## Uso de pré-processador CSS (Less)

Houve o uso do CSS(Less) utilizando variáveis para definir valores padrões para o projeto e facilitar a manutenção e alteração dos mesmos. A utilização de regras dentro de regras, onde as regras aninhadas também herdam os valores de seus “pais”. Tudo para manter a organização do código, como também, para deixá-lo mais limpo. 

### Estrutura do Less 

Para a organização das pastas de estilização, foi criada uma estrutura de arquivos e pastas para separar cada um dos componentes.   

> /Less 
> ----/components
> --------/_banner.less
> --------/_header.less

Após a criação do componente, irá precisar importá-lo: 

> /Less 
> ----/_extend.less

    @import  './components/_banner.less';
    @import  './components/_header.less';



## Automatização (Grunt)

No projeto foi utilizada a ferramenta Grunt para automatizar, fazer a compilação do CSS(Less).  

### Como rodar a compilação do Grunt? 

- Acesse a pasta do projeto: 

      cd assessment-frontend/public

- Instale as dependências:

      npm install

- Rode o Grunt

      grunt watch  

## As tecnologias e bibliotecas (Javascript/Jquery)

Foram criados dois arquivos Javascript e implementada a biblioteca Jquery para algumas funcionalidades do projeto. 

### 1. Requisição Ajax 

Criação de uma requisição Ajax para consultar e mostrar a lista de produtos a serem exibidas nas páginas de categorias. 

### 2. Função para o Menu com Jquery (mobile)

Função aplicada para mobile. O menu do tipo 'hamburguer' é composto por um botão fixo na barra de navegação da página, que quando clicado exibe ou oculta o menu lateral contendo uma lista de links, no caso, as categorias. 

