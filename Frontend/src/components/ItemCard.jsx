import { api } from "../config";

export default function Itemcard(props) {
  return (
    <a href={"/" + props.id} data-aos="fade-up">
      <div className="card">
        <div className="card-img">
          <img
            src={api+"/files/"+props.image}
            alt=""
          />
        </div>
        <div className="card-desc">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
}
