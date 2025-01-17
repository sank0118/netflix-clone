import { style } from "@vanilla-extract/css";
import homeStyle from "./hom.css";
import OpenColor from "open-color";

const styles = {
  wrap: style({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  }),
  container: style([homeStyle.container.div, {}]),
  content: style({
    position: "relative,",
    padding: 20,
    marginTop: 30,
    background: OpenColor.gray[8],
    borderRadius: 10,
    transition: "all .3s, ",
    ":hover": {
      transform: "scale(1.03)",
    },
  }),
  wrap: style({
    // fontWeight: 600,
  }),
  title: style({
    fontSize: "1.1rem",
    fontWeight: 600,
  }),
  desc: style({
    fontWeight: 600,
  }),
  button: style({
    background: OpenColor.gray[7],
    marginTop: 20,
    ":hover": {
      background: OpenColor.gray[6],
    },
  }),
  icon: style({
    position: "absolute",
    top: -30,
    fontSize: "40",
  }),
};

export default styles;
