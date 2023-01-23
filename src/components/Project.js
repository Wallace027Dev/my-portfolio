import "../styles/Project.css";

export default function Project(props) {
  return (
    <>
      <div className="container">
        <div>
          <h3>{props.project}</h3>
          <p>{props.subtitle}</p>
        </div>
        <div>
          <div className="cont-skills">
            <h4>{props.skill1}</h4>
            <h4>{props.skill2}</h4>
            <h4>{props.skill3}</h4>
          </div>
          <a href={props.linkProject}>
            <img src={props.imageProject} alt={props.acess} />
          </a>
        </div>
      </div>
    </>
  );
}
