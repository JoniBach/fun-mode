import { useEffect, useState } from "react";
import { IconButton } from "../button/button";
import { Carousel, CarouselCard } from "../carousel/carousel";
import "./imageUploader.css";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
export const ImageUploader = (props) => {
  const [files, setFiles] = useState([]);
  const [prvFiles, setPrvFiles] = useState();
  console.log(files.length)





  const toURL = (img) => {
    const demo = files ? URL.createObjectURL(img) : null;
    return demo;
  };

  const handleInput =  () => {
    //   await setPrvFiles(files)
     document.getElementById("images").click();
  };

  return (
    <div>
        <Carousel
          height={0}
          overlay={
            files.length !== 0  ? <IconButton
            backgroundColor="#fed8b1"
            onClick={handleInput}
            // type="submit"
            icon={<EditRoundedIcon />}
          >
            {/* Change FIles */}
          </IconButton> : false
          }
          altComponent={
            files.length === 0 ? <IconButton
              backgroundColor="lightgrey"
              onClick={handleInput}
              // type="submit"
              icon={<ImageRoundedIcon />}
            >
              Browse FIles
            </IconButton> : false
            // <button onClick={() => handleInput()}>
            //     hi
            // </button>
          }
        >
          {files.length !== 0 && files.map((d, i) => (
            <CarouselCard src={toURL(d)} />
          ))}
        </Carousel>

      {/* {files ? (
        files.map((d, i) => (
          <img src={toURL(d)} style={{ width: "100%" }} className="image" />
        ))
      ) : (
        <div />
      )} */}

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
