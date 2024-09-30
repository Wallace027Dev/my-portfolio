import styled from "styled-components";

export const Container = styled.nav`
  /* Estilos comuns para a barra de navegação */
  .nav-bar {
    background-color: var(--secondary);
    width: 90%;
    height: 4rem;
    margin-top: 2.375rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
  }

  /* Estilos para os botões de navegação */
  .navigator button {
    margin: auto 0.75rem;
    color: var(--tertiary);
    font-weight: 700;
    cursor: pointer;
  }

  /* Estilos para a lista de navegação */
  @media screen and (max-width: 768px) {
    .nav-bar {
      width: 100%;
      padding: 0 0.75rem;
      border-radius: 0;
      margin-top: 0;
    }
    .navigator {
      display: none;
    }
  }

  /* Exibir o ícone do menu móvel quando a tela for menor que 730px */
  @media screen and (max-width: 730px) {
    .navigator {
      display: none;
    }
    .nav-list {
      display: none;
    }
    .nav-item {
      display: none;
    }
  }
`;
