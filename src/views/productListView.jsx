import { Card, CardContent } from "../components/card/card";
import { ProductList, ProductListItem } from "../components/list/list";
import { products } from "../products";
export function ProductListView() {
  //   let match = useRouteMatch();
  return (
    <div>
      {/* <Card
        hiddenContent={
          <div>
            <div>hi</div>
            <div>how are ya?</div>
            <div>come an av some toast!</div>
          </div>
        }
        p={10}
      >
        <CardContent src="https://api.time.com/wp-content/uploads/2016/03/national-puppy-day.jpg" />
        <CardContent>hi</CardContent>
      </Card> */}
      {products.map((p, i) => (
        <ProductListItem p={10} src={p.image} link={`/product/${p.id}`}>
          <h5 style={{marginBlock: 5}}>{p.subTitle}</h5>
          <h2 style={{marginBlock: 5}}>{p.title}</h2>
          {p.details.map((d, i) => (
            <ul>
              <li>
                <p style={{marginBlock: 5}}>{d.content} {d.label}</p>
              </li>
            </ul>
          ))}
        </ProductListItem>
      ))}
    </div>
  );
}
