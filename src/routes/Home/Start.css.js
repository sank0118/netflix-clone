import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const imgUrl =
  "https://cdn.pixabay.com/photo/2024/12/31/01/02/costa-rica-9301364_640.jpg";

const styles = {
  container: style({
    padding: "200px 30px",
    backgroundImage: `url(${imgUrl})`,
    position: "relative",
    zIndex: 0,
    "::after": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(0,0,0,.6)",
      zIndex: -1,
    },
  }),

  div: style({
    textAlign: "center",
  }),

  h1: style({
    fontWeight: 900,
    fontSize: "2rem",
  }),

  p: style({
    margin: "10px 0",
  }),
  form: style({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  }),

  input: style({
    background: "rgba(255,255,255,.1)",
    outline: "none",
    border: "1px solid green",
    color: OpenColor.gray[0],
    borderRadius: 4,
  }),

  button: style({
    background: OpenColor.red[7],
    display: "flex",
    alignItems: "center",
    transition: "all .3s",
    ":hover": {
      background: OpenColor.red[7],
      opacity: 0.8,
    },
    ":active": {
      opacity: 0.6,
    },
  }),

  icon: style({}),
  buttonWrap: style({
    display: "flex",
    justifyContent: "center",
  }),
};

export default styles;
