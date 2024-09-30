import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--secondary);
  height: 5.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .foot a {
    font-weight: 700;
    color: var(--primary);
  }

  .social-medias-foot img {
    margin: 0 1.25rem;
    height: 2rem;
  }

  @media only screen and (max-width: 768px) {
    height: 4rem;
    justify-content: center;
    gap: 1rem;
  }

  @media only screen and (max-width: 425px) {
    .foot a {
      font-weight: 700;
      color: var(--primary);
    }

    .social-medias-foot img {
      margin: 0 1.25rem;
      height: 2rem;
    }
    height: 8rem;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
