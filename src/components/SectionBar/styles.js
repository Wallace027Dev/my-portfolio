import styled from "styled-components";

export const Container = styled.h2`
  @keyframes wave {
    0% {
      transform: rotate(0deg) scale(1);
    }
    15% {
      transform: rotate(20deg) scale(1.05);
    }
    30% {
      transform: rotate(-20deg) scale(0.95);
    }
    45% {
      transform: rotate(20deg) scale(1.05);
    }
    60% {
      transform: rotate(-20deg) scale(0.95);
    }
    75% {
      transform: rotate(0deg) scale(1.05);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }

  .waving-hand {
    display: inline-block;
    animation: wave 4s linear infinite;
    margin-right: 0.5rem;
  }

  .section-bar {
    background-color: var(--secondary);
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    color: var(--primary);
    font-weight: 700;
    font-size: 1.15rem;
    margin-bottom: 1.5rem;
  }
`;
