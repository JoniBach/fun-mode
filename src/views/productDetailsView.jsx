import { useParams } from "react-router-dom";
import { Card, CardMedia } from "../components/card/card";

export function ProductDetailsView() {
  let { id } = useParams();
  console.log(useParams());
  return (
    <Card>
      <CardMedia>Product ID {id}</CardMedia>
    </Card>
  );
}
