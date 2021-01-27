import { useState } from "react";
import { Card, CardContent } from "../components/card/card";
import { ProductList, ProductListItem } from "../components/list/list";
import { SearchBar } from "../components/search/search";
import { products } from "../products";
export function ProductListView() {
  //   let match = useRouteMatch();
  const [searchText, setSearchText] = useState("");
  
  const handleSearch = () => {
    const splitSearchText = (str) => str.split(/[ ,]+/);
    const filter = (text) => {
      const base = products.map((product) => {
        const compoundString = {
          ...product,
          concat: `${product.title} ${product.subTitle} ${product.details.map(
            (d) => `${d.content} ${d.label}`
          )}`,
        };
        return compoundString;
      });
      console.log("base", base);

      return base.filter((f) => {
        return f.concat.toLowerCase().includes(text.toLowerCase());
      });
    };
    console.log(splitSearchText(searchText))
    // const splitSearchText = formatCriteria(searchText).map((text) =>
    //   filter(text)
    // );
    // console.log("split text", splitSearchText);

    return filter(searchText);
  };
  console.log(handleSearch());
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
      <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Find a product..."
        label="Search"
        backgroundColour="transparent"
        variant="outline"
        pDrawer={5}
      >
        {handleSearch().map((p, i) => (
          <ProductListItem
            imgHeight={100}
            imgWidth={100}
            // p={10}
            src={p.images[0]}
            link={`${process.env.PUBLIC_URL}/#/product/${p.id}`}
          >
            <h3>
              {p.title}
              {p.details.map((d, i) => (
                <>&nbsp;&#9642;&nbsp;{d.content}</>
              ))}
              &nbsp;{p.subTitle}
            </h3>
          </ProductListItem>
        ))}
      </SearchBar>
      {products.map((p, i) => (
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
    // const oldFilter = (text) => {
    //   return products.filter((product) => {
    //     return (
    //       product.title.toLowerCase().includes(text.toLowerCase()) ||
    //       product.subTitle.toLowerCase().includes(text.toLowerCase()) ||
    //       product.details
    //         .map((d) => d.content + d.label)
    //         .toString()
    //         .toLowerCase()
    //         .includes(text.toLowerCase())
    //       // product.details.map((d, i) => (
    //       //   mapDetails().PUBLIC_URLtoLowerCase().includes(searchText.toLowerCase())
    //       // ))
    //     );
    //   });
    // };