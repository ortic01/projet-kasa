import { useParams } from "react-router-dom";
import Server from "../components/Server";
import Tags from "../components/Tags";
import Slider from "../components/Slider";


const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, location, rating, host, equipments, description, pictures } =
    product;

  return (
    <div className="singleproduct">
      <Slider slides={pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct__rating-and-host">
          <Rating rating={rating} />
          <Server host={host} />
        </div>
      </div>
      <div className="singleproduct__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </div>
  );
};

export default SingleProduct;
