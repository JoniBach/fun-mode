import { Card, CardMedia } from "../components/card/card";
import { ProductList, ProductListItem } from "../components/list/list";

export function ProductListView() {
  //   let match = useRouteMatch();
  return (
    <div>
      <Card
        hiddenContent={
          <div>
            <div>hi</div>
            <div>how are ya?</div>
            <div>come an av some toast!</div>
          </div>
        }
        p={10}
      >
        <CardMedia src="https://api.time.com/wp-content/uploads/2016/03/national-puppy-day.jpg" />
        <CardMedia>hi</CardMedia>
      </Card>
      <ProductList>
        <ProductListItem
          p={10}
          src="https://images.fineartamerica.com/images-medium-large-5/a-basket-of-puppies-susan-schmitz.jpg"
          link={`/product/${1}`}
        >
          <h5>Product title</h5>
          <h2>Subtitle</h2>
          <p>details</p>
        </ProductListItem>
      </ProductList>
    </div>
  );
}
