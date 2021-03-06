import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/card/card";
import { products } from "../products";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "../components/button/button";
import CheckIcon from "@material-ui/icons/Check";
import {NewProductsContext} from '../contexts/newProductContext'
import { Carousel, CarouselCard } from "../components/carousel/carousel";
export function ProductDetailsView() {
  let { id } = useParams();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [newProducts, setNewProducts] = useContext(NewProductsContext);

  useEffect(() => {
    setProductData(getProductData(id));
    setLoading(false);
  });

  const getProductData = () => {
    // products.find(x => x.id === '45').foo;
    const data = newProducts.find((obj) => obj.id === id);
    return data;
  };

  console.log(productData);

  if (loading) {
    return (
      <Card>
        Fetching product <i>{id}</i>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardContent icon={<CheckIcon />}>&#10004; In Stock</CardContent>
        {/* <CardContent src={productData.image} /> */}
        <Carousel height={400}>
          {
          productData.images.map((d,i) => (
          <CarouselCard src={d} />
          // <CarouselCard src="https://c8.alamy.com/comp/WXFRPC/portrait-of-puppies-border-collie-in-a-basket-in-front-of-white-background-WXFRPC.jpg" />

          ))
          }
        </Carousel>
        <CardContent>
          <h6>
            <b>{productData.subTitle}</b> : {productData.id}
          </h6>
          <h2>
            {productData.title}
            {productData.details.map((d, i) => (
              <>&nbsp;&#9642;&nbsp;{d.content}</>
            ))}
          </h2>
        </CardContent>

        
        <CardContent shadow={true}>
          <table id="vertical-1">
            <tr>
              <th></th>
              <th>{productData.title}</th>
              <th>
                <th>
                  <IconButton backgroundColor="#bbb" lineHeight="30px" iconSize={2} icon={<AddIcon />}>
                    COMPARE
                  </IconButton>
                </th>
              </th>
            </tr>
            {productData.details.map((d, i) => (
              <tr>
                <th>{d.label}</th>
                <td>{d.content}</td>
              </tr>
            ))}
          </table>
        </CardContent>
        <CardContent>
          <IconButton backgroundColor="lightgreen" icon={<ShoppingCartIcon />}>
            ADD TO BASKET
          </IconButton>
          <IconButton
            backgroundColor="lightcoral"
            icon={<FavoriteBorderIcon />}
          >
            SAVE FOR LATER
          </IconButton>

          <IconButton backgroundColor="lightblue" icon={<SaveAltIcon />}>
            DOWNLOAD
          </IconButton>
        </CardContent>
      </Card>
    );
  }
}
