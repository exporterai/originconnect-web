import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  return <h1>{slug}</h1>;
};

export default ProductDetails;