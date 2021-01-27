import "./card.css";
import "../button/button.css";
import { useState } from "react";

export const CardContent = (props) => {
  return (
    <div
      style={{
        width: props.src ? (props.width ? props.width : "100%") : "auto",
        height: props.src ? (props.height ? props.height : 400) : "auto",
        // backgroundImage: `url(${props.src})`,
     
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        boxShadow: props.shadow ? "inset 0 0 20px #000000" : "",
        // border: props.src ? "2px solid rgba(2, 2, 2, 0.7" : "",
        // boxShadow: '5px 5px 5px rgba(68,68,68,0.6)',
        // filter:
        //   "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)",
      }}
      // className='card-content'
    >
      {
        props.src ? (
          <img
          alt={props.src}
          src={props.src}
          style={{
            width: props.width ? props.width : 'auto',
            height: props.src ? (props.height ? props.height : 400) : "auto",
            borderRadius: "25px",
            boxShadow: "inset 0 0 20px #000000",
          }}
        />
        ) : (
          <div className="card-content " style={{ padding: props.p ? props.p : 20 }}>
          {props.children}
        </div>
        )
      }
    </div>
  );
};

export const Card = (props) => {
  const [expandSecretMenu, setExpandSecretMenu] = useState(false);
  const handleClick = () => {
    if (props.hiddenContent) {
      setExpandSecretMenu(true);
    } else if (props.link) {
      window.location.href = props.link;
    } else {
    }
  };
  return (
    <div class="card-container">
      <div
        class={`
  card
  ${props.link || props.hiddenContent ? "card-hover" : ""}
  ${`${expandSecretMenu ? "card-expand" : ""}`}
  `}
        style={{
          padding: props.p ? props.p : 0,
          display: props.row ? "flex" : "auto",
          flexDirection: props.row ? "row" : "auto",
        }}
        onMouseDown={() => handleClick()}
      >
        {props.children}
        {expandSecretMenu || props.openDrawer ? (
          <div>
            {
              !props.openDrawer && (<button
                onMouseUp={() => setExpandSecretMenu(!expandSecretMenu)}
                class="btn-r"
              >
                X
              </button>)
            }
            
            {props.hiddenContent}
          </div>
        ) : null}
      </div>
    </div>
  );
};
