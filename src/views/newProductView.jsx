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
import { ImageUploader } from "../components/imageUploader/imageUploader";
const fields = [
  { key: "title", example: "Microsoft Surface 3", value: "Product Name" },
  { key: "subTitle", example: "Laptop", value: "Product Type" },
  { key: "content_cpu", example: "Core_i5", value: "CPU", content: true },
  { key: "content_gpu", example: "GTX 1650 TI", value: "GPU", content: true },
  { key: "content_ram", example: "16GB DDR4", value: "RAM", content: true },
  { key: "content_screen", example: '13.5"', value: "Screen", content: true },
  {
    key: "content_storage",
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
  console.log(newProductData);
  const hList = (text) => {
    return <>&nbsp;&#9642;&nbsp;{text.toUpperCase()}</>;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      newProductData.title &&
      newProductData.subTitle &&
      newProductData.images &&
      newProductData.content_cpu &&
      newProductData.content_gpu &&
      newProductData.content_screen &&
      newProductData.content_storage
    ) {
      await setNewProducts([
        ...newProducts,
        {
          id: `${Date.now()}-${uuidv4()}`,
          title: newProductData.title,
          subTitle: newProductData.subTitle,
          // images: [
          //   "https://images.squarespace-cdn.com/content/v1/573e57871bbee0d6dea60fff/1553177786478-6W23ACKEX37M6VVHIR9L/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/laptop.png?format=1500w",
          //   "https://images.squarespace-cdn.com/content/v1/573e57871bbee0d6dea60fff/1553177786478-6W23ACKEX37M6VVHIR9L/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/laptop.png?format=1500w",
          //   "https://images.squarespace-cdn.com/content/v1/573e57871bbee0d6dea60fff/1553177786478-6W23ACKEX37M6VVHIR9L/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/laptop.png?format=1500w",
          // ],
          images: newProductData.images,
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
      window.location.href = `${process.env.PUBLIC_URL}/#/products/`;
    } else {
      const fields = [
        newProductData.title ? false : 'Name',
        newProductData.subTitle ? false : 'Title',
        newProductData.images.length !== 0 ? false : 'Images',
        newProductData.content_cpu ? false : 'CPU',
        newProductData.content_gpu ? false : 'GPU',
        newProductData.content_ram ? false : 'RAM',
        newProductData.content_storage ? false : 'Storage',
        newProductData.content_screen ? false : 'Screen',
      ];
      alert(`Please fill the following fields: ${fields.map(d => d? `${d}, ` : '').join('')}`);
    }
  };

  return (
    <Card>
      <CardContent icon={<CheckIcon />}>&#10004; In Draft</CardContent>

      <ImageUploader
        handleImages={(e) =>
          setNewProductData({ ...newProductData, images: e })
        }
      />

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
      <form id="new-product" onSubmit={(event) => handleSubmit(event)}>
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
