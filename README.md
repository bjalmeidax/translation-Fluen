# Fluën - Landing Page para Escola de Idiomas com Tradutor Integrado 🌐

Este projeto é uma landing page desenvolvida para uma escola de idiomas fictícia chamada **Fluën**. A página contém informações sobre os cursos, planos e preços, além de uma funcionalidade de tradutor integrado para facilitar a comunicação entre diversos idiomas. 

## Funcionalidades 🛠️

- **Seleção dinâmica de idiomas**: O usuário pode escolher entre uma variedade de idiomas utilizando o `<select>`, com uma seleção padrão para português e inglês.
- **Troca de idiomas**: Ao clicar no ícone de inversão, os idiomas selecionados trocam de posição, facilitando a tradução.
- **Tradução automática**: Ao pressionar o botão "Traduzir", o texto inserido é traduzido automaticamente, com um feedback visual enquanto a requisição é processada.
- **Funcionalidade de copiar texto**: O texto traduzido pode ser facilmente copiado para a área de transferência utilizando `navigator.clipboard.writeText()`.
- **Sidebar interativa**: A interface conta com uma sidebar que pode ser aberta ou fechada, proporcionando uma navegação mais fluida.

## Tecnologias Utilizadas 🚀

- **JavaScript**: Manipulação do DOM e integração com APIs externas.
- **HTML & CSS**: Estrutura e design da landing page.
- **API Externa**: Tradução automática de texto entre diversos idiomas.
- **Funcionalidades do Navegador**: Uso de `navigator.clipboard.writeText()` para copiar texto para a área de transferência e integração com `SpeechSynthesisUtterance` para síntese de fala (ainda em ajuste).

## Objetivo 🎯

Este projeto tem como objetivo demonstrar a aplicação de técnicas como:

- Manipulação do DOM
- Requisições assíncronas com `fetch()`
- Integração com APIs externas
- Recursos do navegador (como síntese de fala e cópia para a área de transferência)

## Videos 🎥

- **Demonstração do Projeto**: 


## Notas ⚠️

- A funcionalidade de **síntese de fala** (SpeechSynthesisUtterance) está em processo de ajuste.
- O projeto foi desenvolvido com foco em uma experiência de tradução interativa e prática para o usuário.
