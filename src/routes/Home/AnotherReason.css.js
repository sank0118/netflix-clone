import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const flex = style({
  display: "flex",
  flexDirection: "column",
});

const styles = {
  Container: style([
    flex,
    {
      border: "1px solid ",
      borderRadius: 10,
      padding: "30px,20px",
      rowGap: 20,
      alignItems: "flex-end",
      background: OpenColor.gray[8],
      ":hover": {
        background: OpenColor.gray[7],
      },
    },
  ]),
  title: style({
    fontSize: "1.1rem",
    fontWeight: 600,
  }),
  desc: style({ fontSize: ".9rem", color: OpenColor.gray[4] }),
  icon: style({
    fontSize: 40,
    // width: "100%", border: "1px solid "
  }),
  wrap: style([
    flex,
    {
      rowGap: 10,
      alignItems: "flex-start",
      width: "100%",
    },
  ]),
};

export default styles;
