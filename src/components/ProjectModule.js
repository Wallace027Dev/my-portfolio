import styled from 'styled-components';

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    margin: 1rem;
    width: 22.5rem;
    height: 28.75rem;
    border: 1px solid var(--primary);
    border-radius: 1rem;
    padding: 1.6rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: var(--tertiary);
    }
    img {
      width: 22rem;
      height: 12.5rem;
      border-radius: 0.5rem;
    }
    h3 {
      font-weight: 700;
      font-size: 1.25rem;
      padding-bottom: 1rem;
    }

    .cont-skills {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1.5rem;

      h4 {
        background-color: var(--secondary);
        width: 6.625rem;
        height: 1.875rem;
        border-radius: 0.5rem;
        color: var(--primary);
        font-weight: 700;
        font-size: 1rem;
        margin-right: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .container {
      margin: 1rem;
      width: 16rem;
      height: 18rem;
      padding: 0.5rem;
      p {
        font-size: 0.75rem;
        padding-bottom: 0rem;
      }
      img {
        width: 16rem;
        height: 9rem;
      }
      h3 {
        font-size: 1.25rem;
        padding-bottom: 0.75rem;
        text-align: center;
      }
      .cont-skills {
        h4 {
          display: none;
        }
      }
    }
  }
`;

export default function ProjectModule(props) {
  return (
    <Project className="tranformThis">
      <a href={props.linkProject}>
        <div className="container">
          <div>
            <h3>{props.projectName}</h3>
            <p>{props.subtitle}</p>
          </div>
          <div>
            <div className="cont-skills">
              <h4 className="center">{props.skill1}</h4>
              <h4 className="center">{props.skill2}</h4>
              <h4 className="center">{props.skill3}</h4>
            </div>
            <div>
              <img src={props.imageProject} alt={props.acess} />
            </div>
          </div>
        </div>
      </a>
    </Project>
  );
}
