import styled from "styled-components";

const Project = styled.div`
  .container {
    width: 22.5rem;
    height: 28.75rem;
    border: 1px solid var(--purple);
    border-radius: 1rem;
    padding: 1.6rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 0.875rem;
      color: var(--gray);
    }
    img {
      width: 22rem;
      height: 14rem;
      border-radius: 0.5rem;
    }
    h3 {
      font-weight: 700;
      font-size: 1.25rem;
      padding-bottom: 1rem;
    }
    .transit-proj {
      transition: transform 0.51s;
      :hover,
      :focus {
        transform: translateX(-1px) scale(1.1);
        background-color: var(--dark-purple);
      }
    }
    .cont-skills {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1.5rem;
      h4 {
        background-color: var(--dark-purple);
        width: 6.625rem;
        height: 1.875rem;
        border-radius: 0.5rem;
        color: var(--purple);
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
      }
    }
  }
  @media (max-width: 425px) {
    .container {
      width: 16rem;
      height: 28rem;
      padding: 1.2rem 1.2rem;
    }
		img {
      width: 16rem;
      height: 9rem;
      border-radius: 0.5rem;
    }
  }
`;

export default function ProjectModule(props) {
  return (
    <Project>
      <a href={props.linkProject}>
        <div className="container transit-proj">
          <div>
            <h3>{props.projectName}</h3>
            <p>{props.subtitle}</p>
          </div>
          <div>
            <div className="cont-skills">
              <h4>{props.skill1}</h4>
              <h4>{props.skill2}</h4>
              <h4>{props.skill3}</h4>
            </div>
            <img src={props.imageProject} alt={props.acess} />
          </div>
        </div>
      </a>
    </Project>
  );
}
