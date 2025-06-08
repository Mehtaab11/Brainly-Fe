import type { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary";
  size: "md" | "lg" | "sm";
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  text: string;
  onClick: () => void;
}
const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600 ",
};

const sizeStyles = {
  md: "px-4 py-2",
  lg: "px-6 py-3",
  sm: "px-2 py-1",
};

const defaultStyles = "rounded-md flex";

const Button = (props: buttonProps) => {
  return (
    <>
      {" "}
      <button
        className={`${variantStyles[props.variant]} ${defaultStyles} ${
          sizeStyles[props.size]
        }`}
      >
        {props.startIcon ? <div className="mr-2">{props.startIcon} </div> : null} {props.text}
        {props.endIcon}
      </button>
    </>
  );
};

export default Button;

{
  /* <Button variant="primary" />; */
}
