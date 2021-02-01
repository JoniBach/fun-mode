import "./nav.css";
import "./button.css";
import { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/MenuRounded";
export const Nav = (props) => {
  const [expandHamburgerMenu, setExpandHamburgerMenu] = useState(false);
  const [expandSecretMenu, setExpandSecretMenu] = useState(false);
  const [hamburgershrink, setHamburgerShrink] = useState(false);
  const [secretMenuShrink, setSecretMenuShrink] = useState(false);

  const handleClose = () => {
    console.log('lol')
    setExpandHamburgerMenu(false)
  }

  return (
    <div>
     
      <div id="c">
        <div
          class={`circle-border a 
          ${hamburgershrink ? "a-circle-hover" : ""} 
          ${secretMenuShrink ? "a-hover" : ""} 
          ${expandSecretMenu ? "a-expand" : ""}
          `}
          onClick={() => !expandSecretMenu ? setExpandSecretMenu(true) : null}
          onMouseEnter={() => setSecretMenuShrink(true)}
          onMouseLeave={() => setSecretMenuShrink(false)}
        >
          {expandSecretMenu ? (
            <div>
              <button
                onClick={() => setExpandSecretMenu(false)}
                class="btn-r"
              >
                X
              </button>
              <div style={{ paddingTop: 100 }} class="a-secret-menu">
                <h3>{props.secretMenu}</h3>
              </div>
            </div>
          ) : (
            <h3 class={"title"}>{props.title}</h3>
          )}
        </div>
      </div>
      <div class="circle-container">
        <div
          id="circle"
          class={`circle-border circle ${expandHamburgerMenu ? "expand" : ""} ${
            hamburgershrink ? "circle-hover" : ""
          }`}
          onClick={() => !expandHamburgerMenu ? setExpandHamburgerMenu(true) : null}
          onMouseEnter={() => setHamburgerShrink(true)}
          onMouseLeave={() => setHamburgerShrink(false)}
        >
          {expandHamburgerMenu ? (
            <div>
              <button
              id='close-hamburger-menu'
                class="btn"
                onClick={() => setExpandHamburgerMenu(false)}
              >
                X
              </button>
              <div onClick={() => setExpandHamburgerMenu(false)}>
                {props.hamburgerMenu}
              </div>
     
            </div>
          ) : (
            <div class="content">
              <MenuIcon fontSize="large" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
