import { useContext } from "react";
import { ProductListItem } from "../components/list/list";
import {NewProductsContext} from '../contexts/newProductContext'
import { SearchWrapper } from "../wrappers/searchWrapper";

export function ProductListView() {
  const [newProducts, setNewProducts] = useContext(NewProductsContext);

  return (
    <div>
<SearchWrapper />
      {newProducts.map((p, i) => (
        <ProductListItem
          p={10}
          src={p.images[0]}
          link={`${process.env.PUBLIC_URL}/#/product/${p.id}`}
        >
          <h5 style={{ marginBlock: 5 }}>{p.subTitle}</h5>
          <h2 style={{ marginBlock: 5 }}>{p.title}</h2>
          {p.details.map((d, i) => (
            <ul>
              <li>
                <p style={{ marginBlock: 5 }}>
                  {d.content} {d.label}
                </p>
              </li>
            </ul>
          ))}
        </ProductListItem>
      ))}
    </div>
  );
}

