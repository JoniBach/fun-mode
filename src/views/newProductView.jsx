import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent } from "../components/card/card";
import { products } from "../products";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "../components/button/button";
import CheckIcon from "@material-ui/icons/Check";
import { Carousel, CarouselCard } from "../components/carousel/carousel";
import SaveIcon from "@material-ui/icons/Save";
import PublishIcon from "@material-ui/icons/Publish";
import { TextField } from "../components/textField/textField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { NewProductsContext } from "../contexts/newProductContext";
import { v4 as uuidv4 } from "uuid";

const fields = [
  { key: "title", example: "Microsoft Surface 3", value: "Product Name" },
  { key: "subTitle", example: "Laptop", value: "Product Type" },
  { key: "content_cpu", example: "Core_i5", value: "CPU", content: true },
  { key: "content_gpu", example: "GTX 1650 TI", value: "GPU", content: true },
  { key: "content_ram", example: "16GB DDR4", value: "RAM", content: true },
  { key: "content_screen", example: '13.5"', value: "Screen", content: true },
  {
    key: "content_STORAGE",
    example: "500GB SSD",
    value: "Storage",
    content: true,
  },
];
export function NewProductView() {
  const [newProducts, setNewProducts] = useContext(NewProductsContext);
  const [newProductData, setNewProductData] = useState({});
  const handleForm = (key, value) => {
    setNewProductData({
      ...newProductData,
      [key]: value,
    });
  };
  const hList = (text) => {
    return <>&nbsp;&#9642;&nbsp;{text.toUpperCase()}</>;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await setNewProducts([
      ...newProducts,
      {
        id: `${Date.now()}-${uuidv4()}`,
        title: newProductData.title,
        subTitle: newProductData.subTitle,
        images: [
          "https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled",
          "https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled",
          "https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled",
          "https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled",
        ],
        details: [
          {
            content: newProductData.content_cpu,
            label: "cpu",
          },
          {
            content: newProductData.content_gpu,
            label: "gpu",
          },
          {
            content: newProductData.content_ram,
            label: "ram",
          },
          {
            content: newProductData.content_screen,
            label: "screen",
          },
        ],
      },
    ]);
    await setNewProductData({});
    await document.getElementById("new-product").reset();
     window.location.href = `${process.env.PUBLIC_URL}/#/products/`
  };

  return (
    <Card>
      {/* <Carousel height={400}>
          {
          productData.images.map((d,i) => (
          <CarouselCard src={d} />
          // <CarouselCard src="https://c8.alamy.com/comp/WXFRPC/portrait-of-puppies-border-collie-in-a-basket-in-front-of-white-background-WXFRPC.jpg" />

          ))
          }
        </Carousel> */}
      {console.log("submission newProducts:", newProducts)}
      {console.log("submission product data:", newProductData)}

      <CardContent>
        {newProductData.subTitle ? (
          <>
            <b>{newProductData.subTitle}</b> : xxxx{" "}
          </>
        ) : (
          <b> Sub Title </b>
        )}
        <h2>
          {newProductData.title ? newProductData.title : "Product"}
          {newProductData.content_cpu
            ? hList(newProductData.content_cpu)
            : hList("cpu")}
          {newProductData.content_gpu
            ? hList(newProductData.content_gpu)
            : hList("gpu")}
          {newProductData.content_ram
            ? hList(newProductData.content_ram)
            : hList("RAM")}
          {newProductData.content_screen
            ? hList(newProductData.content_screen)
            : hList("screen")}
          {newProductData.content_storage
            ? hList(newProductData.content_storage)
            : hList("storage")}
        </h2>
      </CardContent>
      <form id='new-product' onSubmit={(event) => handleSubmit(event)}>
        <CardContent shadow={true}>
          {fields.map((d, i) => (
            <TextField
              value={newProductData[d]}
              onChange={(e) => handleForm(d.key, e.target.value, d.content)}
              placeholder={`${d.example} . . .`}
              label={d.value.charAt(0).toUpperCase() + d.value.slice(1)}
              backgroundColour="transparent"
              width="100%"
              variant="outline"
              mb={10}
            />
          ))}
        </CardContent>
        
        <CardContent>
        
        <IconButton
            backgroundColor="lightgreen"
            type="submit"
            icon={<PublishIcon />}
          >
            SUBMIT
          </IconButton>

          <IconButton backgroundColor="lightcoral" icon={<SaveIcon />}>
            SAVE AS DRAFT
          </IconButton>
          <IconButton backgroundColor="lightblue" icon={<VisibilityIcon />}>
            PREVIEW
          </IconButton>
        </CardContent>
      </form>

      <Card link={`${process.env.PUBLIC_URL}/#/products/`}>
            <CardContent>See products here</CardContent>
          </Card>
    </Card>
  );
}