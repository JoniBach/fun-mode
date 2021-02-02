
import { useState, useContext } from "react";
import {NewProductsContext} from '../contexts/newProductContext'
import { SearchBar } from "../components/search/search";
import { ProductList, ProductListItem } from "../components/list/list";

export const SearchWrapper = () => {
  const [searchText, setSearchText] = useState("");
  const [newProducts, setNewProducts] = useContext(NewProductsContext);

  const handleSearch = () => {
      const splitSearchText = (str) => str.toLowerCase().split(/[ ,]+/);
      const filterSearch = (text) => {
        const base = newProducts.map((product) => {
          const compoundString = {
            ...product,
            concat: `${product.title} ${product.subTitle} ${product.details.map(
              (d) => `${d.content} ${d.label}`
            )}`,
          };
          return compoundString;
        });
  
        return base.filter((f) => {
          const containsAll = splitSearchText(searchText).every(elem => splitSearchText(f.concat).indexOf(elem) > -1);
          return (
            containsAll || f.concat.toLowerCase().includes(searchText.toLowerCase())
  
            )
        });
      };
      return filterSearch(searchText);
    };
    return (
        <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Find a product..."
        width='100%'
        // label="Search"
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
    )
}