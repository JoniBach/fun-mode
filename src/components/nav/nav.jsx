import "./nav.css";
import "./button.css";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/MenuRounded';export const Nav = (props) => {
  const [expandHamburgerMenu, setExpandHamburgerMenu] = useState(false);
  const [expandSecretMenu, setExpandSecretMenu] = useState(false);
  const [hamburgershrink, setHamburgerShrink] = useState(false);
  const [secretMenuShrink, setSecretMenuShrink] = useState(false);
  return (
    <div>
      <div id="c">
        <div
          class={`circle-border a 
          ${hamburgershrink ? "a-circle-hover" : ""} 
          ${secretMenuShrink ? "a-hover" : ""} 
          ${expandSecretMenu ? "a-expand" : ""}
          `}
          onClick={() => setExpandSecretMenu(true)}
          onMouseEnter={() => setSecretMenuShrink(true)}
          onMouseLeave={() => setSecretMenuShrink(false)}
        >
          {expandSecretMenu ? (
            <div>
              <button
                onMouseDown={() => setExpandSecretMenu(false)}
                class="btn-r"
              >
                X
              </button>
              <div style={{paddingTop: 100}} class="a-secret-menu">
            <h3>{props.secretMenu}</h3>
                  
              </div>
            </div>
          ) : (
            <h3 class={"title"}>{props.title}</h3>
          )}
        </div>
      </div>
      <div
        id="circle"
        class={`circle-border circle ${expandHamburgerMenu ? "expand" : ""} ${
          hamburgershrink ? "circle-hover" : ""
        }`}
        onClick={() => setExpandHamburgerMenu(true)}
        onMouseEnter={() => setHamburgerShrink(true)}
        onMouseLeave={() => setHamburgerShrink(false)}
      >
        {expandHamburgerMenu ? (
          <div>
            <button onMouseDown={() => setExpandHamburgerMenu(false)} class="btn">
              X
            </button>
            {props.hamburgerMenu}
          </div>
        ) : (
          <div class="content">
          <MenuIcon fontSize="large"/>
          </div>
        )}
      </div>
    </div>
  );
};
