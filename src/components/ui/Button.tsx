import type { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary";
  size?: "md" | "lg" | "sm";
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  text: string;
  onClick: () => void;
}
const variantStyles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
};

const Button = (props: buttonProps) => {
  return (
    <>
      {" "}
      <button className={variantStyles[props.variant]}>{props.text}</button>
    </>
  );
};

export default Button;

{
  /* <Button variant="primary" />; */
}
