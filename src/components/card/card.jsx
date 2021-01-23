import "./card.css";
import "../button/button.css";
import { useState } from "react";

export const CardMedia = (props) => {
  return (
    <div
      style={{
        width: props.src ? (props.width ? props.width : "100%") : "auto",
        height: props.src ? (props.height ? props.height : 200) : "auto",
        backgroundImage: `url(${props.src})`,
        borderRadius: 20,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",

        boxShadow: props.src ? "inset 0 0 20px #000000" : "",
        // border: props.src ? "2px solid rgba(2, 2, 2, 0.7" : "",
        // boxShadow: '5px 5px 5px rgba(68,68,68,0.6)',
        filter:
          "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)",
      }}
    >
      <div className="container" style={{ padding: props.p ? props.p : 20 }}>
        {props.children}
      </div>
    </div>
  );
};

export const Card = (props) => {
  const [expandSecretMenu, setExpandSecretMenu] = useState(false);
  return (
    <div class="card-container">
      <div
        class={`
  card
  ${`${expandSecretMenu ? "card-expand" : ""}`}
  `}
        style={{
          padding: props.p ? props.p : 0,
          display: props.row ? "flex" : "auto",
          flexDirection: props.row ? "row" : "auto",
        }}
        onMouseDown={() =>
          props.hiddenContent
            ? setExpandSecretMenu(true)
            : (window.location.href = props.link)
        }
      >
        {props.children}
        {expandSecretMenu ? (
          <div>
            <button
              onMouseUp={() => setExpandSecretMenu(!expandSecretMenu)}
              class="btn-r"
            >
              X
            </button>
            {props.hiddenContent}
          </div>
        ) : null}
      </div>
    </div>
  );
};
