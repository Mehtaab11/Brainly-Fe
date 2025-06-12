import type { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary" | "selected" | "hollow";
  text: string;
  startIcon?: ReactElement;
  size?: "md" | "lg" | "sm";
  //   endIcon?: ReactElement;
  onClick?: () => void;
}
const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600 ",
  selected: "bg-purple-800 text-white",
  hollow: "bg-transparent border border-purple-600 text-purple-600",
};

const sizeStyles = {
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  sm: "px-2 py-1 text-xs",
};

const defaultStyles = " cursor-pointer font-medium  rounded-md flex";

const Button = (props: buttonProps) => {
  return (
    <>
      {" "}
      <button
        onClick={props.onClick}
        className={`${variantStyles[props.variant]} ${defaultStyles} ${
          props.size ? sizeStyles[props.size] : "px-4 py-2"
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          {" "}
          {props.startIcon} {props.text}
          {/* {props.endIcon} */}
        </div>
      </button>
    </>
  );
};

export default Button;

{
  /* <Button variant="primary" />; */
}
