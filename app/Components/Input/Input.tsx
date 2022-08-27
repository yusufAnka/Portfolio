import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Button: React.FC<IProps> = ({ children, ...props }) => (
  <input {...props} />
);

export default Button;
