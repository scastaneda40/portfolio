import {
  Fragment,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context } from "../context/context";

const colors = [
  { name: "blue", colorImg: "images/styleswitcher/blue.png" },
  { name: "red", colorImg: "images/styleswitcher/red.png" },
  { name: "goldrenrod", colorImg: "images/styleswitcher/goldenrod.png" },
  { name: "magenta", colorImg: "images/styleswitcher/magenta.png" },
  { name: "yellowgreen", colorImg: "images/styleswitcher/yellowgreen.png" },
  { name: "orange", colorImg: "images/styleswitcher/orange.png" },
  { name: "green", colorImg: "images/styleswitcher/green.png" },
  { name: "yellow", colorImg: "images/styleswitcher/yellow.png" },
  { name: "purple", colorImg: "images/styleswitcher/purple.png" },
  { name: "blueviolet", colorImg: "images/styleswitcher/blueviolet.png" },
];

const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(true); // Default to dark mode
  const { colorChange } = useContext(Context);

  // Ensure dark mode is applied on initial load
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  }, []);

  // Sync the dark state with body class changes
  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    } else {
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);

  const moodChange = (value) => {
    setDark(value === "dark");
  };

  return (
    <Fragment>
      <div
        id="switcher"
        style={{ display: toggle ? "block" : "none" }}
        className=""
      >
        <div className="content-switcher">
          <h4>STYLE SWITCHER</h4>
          <ul>
            {colors.map((color, i) => (
              <li key={i}>
                <a
                  href="#"
                  title={color.name}
                  className="color"
                  onClick={() => colorChange(color.name)}
                >
                  <img src={color.colorImg} alt={color.name} />
                </a>
              </li>
            ))}
          </ul>
          <h4>BODY SKIN</h4>
          <label>
            <input
              className="dark_switch"
              type="radio"
              name="color_style"
              id="is_light"
              defaultChecked={!dark}
              onClick={() => moodChange("light")}
            />
            Light
          </label>
          <label>
            <input
              className="dark_switch"
              type="radio"
              name="color_style"
              id="is_dark"
              defaultChecked={dark}
              onClick={() => moodChange("dark")}
            />
            Dark
          </label>
          <br />
          <a
            href=""
            className="waves-effect waves-light btn font-weight-700 purchase hoverable"
          >
            <i className="fa fa-shopping-cart" /> Purchase
          </a>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            &times;
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className="styleSecondColor"
        style={{ display: `${!toggle ? "block" : "none"}` }}
        onClick={() => setToggle(!toggle)}
      >
        <i className="fa fa-cog fa-spin" />
      </div>
    </Fragment>
  );
};

export default memo(Switcher);
