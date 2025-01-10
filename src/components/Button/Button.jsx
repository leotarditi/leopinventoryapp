import React from "react";
import "./Button.css";

const getStyle = (...args) => ["button", ...args].filter(Boolean).join(" ");

export default function Button({ children, type }) {
  return <button className={getStyle(type)}>{children}</button>;
}
