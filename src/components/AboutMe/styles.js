import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .myImg {
    width: 20rem;
    height: 20rem;
    border-radius: 20rem;
    border: var(--font-color) solid 0.25rem;
    margin-bottom: 1.5rem;
  }

  .about-me {
    text-align: center;

    h2 {
      font-weight: 800;
      font-size: 2.5rem;
      margin: 1rem 0;
    }

    a {
      color: var(--tertiary);
    }
  }

  .about-span {
    margin: 1rem auto;

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: var(--tertiary);
      max-width: 22rem;
      padding: 1rem;
    }
  }

  @media screen and (min-width: 320px) {
    .myImg {
      width: 12rem;
      height: 12rem;
    }

    .about-me h2 {
      font-size: 3rem;
      margin: 1.5rem 0;
    }

    .about-me p {
      font-size: 1.125rem;
      max-width: 16rem;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    .myImg {
      width: 16rem;
      height: 16rem;
      margin-bottom: 0;
    }

    .about-me {
      text-align: left;

      h2 {
        font-size: 3rem;
        margin: 1.5rem 0;
      }

      p {
        font-size: 1.125rem;
        max-width: 56.25rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .myImg {
      width: 20rem;
      height: 20rem;
    }

    .about-me h2 {
      font-size: 3.5rem;
      margin: 2rem 0;
    }

    .about-me p {
      font-size: 1.25rem;
    }
  }
`;
