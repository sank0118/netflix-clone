import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  h1: style({
    fontSize: 100,
    fontWeight: 900,
    color: "tomato",
  }),

  input: {
    div: style({
      displqy: "flex",
      flexDirection: "column",
    }),
    input: style({
      outline: "none",
      background: "transparent",
      border: `1px solid ${OpenColor.green[6]}`,
      color: "whitesmoke",
    }),
  },
};
export default styles;
