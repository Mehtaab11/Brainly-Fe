import type { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  //   size: "md" | "lg" | "sm";
  //   endIcon?: ReactElement;
  //   onClick: () => void;
}
const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600 ",
};

// const sizeStyles = {
//   md: "px-4 py-2",
//   lg: "px-6 py-3",
//   sm: "px-2 py-1",
// };

const defaultStyles = " font-light px-4 py-2 rounded-md flex";

const Button = (props: buttonProps) => {
  return (
    <>
      {" "}
      <button
        className={`${variantStyles[props.variant]} ${defaultStyles}
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
