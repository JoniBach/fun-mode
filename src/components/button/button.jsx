import { useState } from "react";

export const IconButton = (props) => {
  const [hover, setHover] = useState(false);
  const iconSize = props.iconSize ? props.iconSize : 10
const newIconSize = hover ? iconSize + (iconSize / 10) : iconSize
  return (
    <button
      class="main-btn"
      type={props.type ? props.type : 'button'}
      onClick={() => props.onClick ? props.onClick : console.log('no click event')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
        style={{
            backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent',
            padding: newIconSize
        }}
          class={`
          ${hover ? "icon-btn-hover" : "main-btn-icon"}
           `}
        >
          {props.icon}
        </div>
        <div class="main-btn-text"
        style={{
            lineHeight: props.lineHeight ? props.lineHeight : '50px'
        }}
        >{props.children}</div>
      </div>
    </button>
  );
};
