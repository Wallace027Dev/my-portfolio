import styled from "styled-components";

export const Container = styled.section`
  .my-skills {
    text-align: center;
    flex-direction: column;
    div {
      padding: 0 1rem;
    }
    h1 {
      font-weight: 800;
      font-size: 3rem;
      margin-bottom: 6.25rem;
    }

    p {
      font-size: 1.5rem;
      color: var(--tertiary);
      margin-bottom: 2.5rem;
    }

    img {
      margin-right: 2rem;
      margin-bottom: 2.75rem;
    }
  }

  @media (max-width: 768px) {
    .my-skills {
      h2 {
        font-size: 2rem;
        margin-bottom: 3.125rem;
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 1.875rem;
      }

      img {
        margin-right: 1rem;
        margin-bottom: 2rem;
        height: 2.5rem;
      }
    }
  }

  @media (max-width: 425px) {
    .my-skills {
      h2 {
        font-size: 1.25rem;
        margin-bottom: 3.125rem;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1.875rem;
      }

      img {
        margin-right: 1rem;
        margin-bottom: 2rem;
        height: 2rem;
      }
    }
  }
`;
