import { useEffect, useState } from "react";
import { IconButton } from "../button/button";
import { Carousel, CarouselCard } from "../carousel/carousel";
import "./imageUploader.css";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
export const ImageUploader = (props) => {
  const [files, setFiles] = useState([]);
  const [prvFiles, setPrvFiles] = useState();
  const toURL = (img) => {
    const url = files ? URL.createObjectURL(img) : null;
    return url;
  };

  const handleInput = () => {
     document.getElementById("images").click();
  };

  useEffect(() => {
props.handleImages(
    files.map(file => toURL(file))
    )
  }, [files])

  return (
    <div>
        <Carousel
          height={400}
          overlay={
            files.length !== 0  ? <IconButton
            backgroundColor="#fed8b1"
            onClick={handleInput}
            icon={<EditRoundedIcon />}
          >
          </IconButton> : false
          }
          altComponent={
            files.length === 0 ? <IconButton
              backgroundColor="lightgrey"
              onClick={handleInput}
              icon={<ImageRoundedIcon />}
            >
              Browse FIles
            </IconButton> : false
          }
        >
          {files.length !== 0 && files.map((d, i) => (
            <CarouselCard src={toURL(d)} />
          ))}
        </Carousel>
      <input
        onChange={(e) => setFiles([...e.target.files])}
        type="file"
        id="images"
        name="img"
        accept="image/*"
        multiple
        hidden
      />
    </div>
  );
};
