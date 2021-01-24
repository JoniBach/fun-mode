import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/card/card";

export function ProductDetailsView() {
  let { id } = useParams();
  console.log(useParams());
  return (
    <Card>
      <CardContent>Product ID {id}</CardContent>
    </Card>
  );
}
