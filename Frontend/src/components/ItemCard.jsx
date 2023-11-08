import { api } from "../config";
import noImage from "../assets/no-image.png"

export default function Itemcard(props) {
  return (
    <a href={"/" + props.id} data-aos="fade-up">
      <div className="card">
        <div className="card-img">
          <img
            src={api+"/files/"+props.image}
            alt=""
            onError={(e) => {
              e.target.src = noImage;
            }}
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
