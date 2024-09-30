import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .my-exp,
  .my-job {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    width: 100%;
    max-width: 56.25rem;
    margin-bottom: 2rem;
    padding: 1rem;
  }

  .exp-span {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--primary);
      border-radius: 1rem;
      width: 15rem;
      height: 15rem;
    }

    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  .my-job {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    color: var(--primary);
    background-color: var(--secondary);

    h2 {
      font-size: 1.5rem;
      letter-spacing: 1rem;
      margin: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .exp-span {
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;

      div {
        max-width: unset;
        width: 12rem;
        height: 12rem;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .my-job {
      padding: 0;

      h2 {
        font-size: 1rem;
        letter-spacing: 0.75rem;
      }
    }
  }
`;
