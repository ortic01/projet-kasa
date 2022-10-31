import { Navigate, useParams } from "react-router-dom";
import products from "../data.json";

import Rating from "../components/Etoile";
import Server from "../components/Server";
import Caroussel from "../components/Caroussel";
import Tags from "../components/Tags";
import Collapse from "../components/Accordeon";

  

function FicheLogemenProduct() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  
if (!product) {
  return <Navigate to= "/404" />
}
const { title, location, rating, host, equipments, description, pictures } =
    product;
  return (
    <div className="fichelogemenproduct">
      <Caroussel slides={pictures} />
      <div className="fichelogemenproduct__content">
        <div className="fichelogemenproduct__informations">
          <h1 className="fichelogemenproduct__title">{title}</h1>
          <p className="fichelogemenproduct__location">{location}</p>
          <div className="fichelogemenproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="fichelogemenproduct__rating-and-host">
          <Rating rating={rating} />
          <Server host={host} />
        </div>
      </div>
      <div className="fichelogemenproduct__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </div>
  );
};

export default FicheLogemenProduct;

