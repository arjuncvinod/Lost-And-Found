import { api } from "../config";

export default function Itemcard(props) {
  return (
    <a href={"/" + props.id} data-aos="fade-up">
      <div className="card">
        <div className="card-img">
          <img

            // src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609"
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
