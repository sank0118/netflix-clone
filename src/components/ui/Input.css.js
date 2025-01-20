import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes"; //커스터마이즈 가능
import OpenColor from "open-color";

const inputStyles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    position: "relative",
  }),

  label: recipe({
    base: {
      //기본 스타일
      position: "absolute",
      opacity: 0.8,
      fontSize: "1.1rem",
      top: "50%",
      transform: "translateY(-50%)",
      left: 10,
      transition: "all .3s",
    },
    variants: {
      //다른 값 스타일
      isFocused: {
        true: {
          top: 3,
          fontSize: ".8rem",
          transform: "none",
        },
      },
    },
  }),

  input: style({
    background: "rgba(255,255,255,.1)",
    outline: "none",
    border: "1px solid green",
    color: OpenColor.gray[0],
    borderRadius: 4,
    paddingTop: 23,
  }),
};

export default inputStyles;
