import { Container } from './style';

import github from '../../images/Github.svg';
import site from '../../images/site.svg';

export default function ProjectModule(props) {
  return (
    <Container className="tranformThis">
      <div className="container">
        <div>
          <div className="title">
            <h3>{props.projectName}</h3>
            <div>
              {props.linkProject && (
                <a target="blank" href={props.linkProject}>
                  <img className="transit" src={github} alt="Github link" />
                </a>
              )}
              {props.linkSite && (
                <a target="blank" className="transit" href={props.linkSite}>
                  <img className="transit" src={site} alt="Site link" />
                </a>
              )}
            </div>
          </div>
          <p>{props.subtitle}</p>
        </div>
        <div>
          <div className="cont-skills">
            <h4 className="center">{props.skill1}</h4>
            <h4 className="center">{props.skill2}</h4>
            <h4 className="center">{props.skill3}</h4>
          </div>
          <div>
            <img
              className="project-image"
              src={props.imageProject}
              alt={props.acess}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
