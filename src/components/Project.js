import "../styles/Project.css";

export default function Project(props) {
  return (
    <>
      <a href={props.linkProject}>
        <div className="container">
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
    </>
  );
}
