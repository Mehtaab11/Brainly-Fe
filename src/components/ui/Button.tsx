import type { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary";
  size?: "md" | "lg" | "sm";
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  text: string;
  onClick: () => void;
}

const Button = (props: buttonProps) => {
  return <button></button>;
};
 
export default Button;

{/* <Button variant="primary" />; */}
