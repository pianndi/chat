import { Button as NextButton } from "@nextui-org/react";

export default function Button({ children, className, ...props }) {
  return (
    <NextButton className={`min-h-10 p-0 min-w-10 aspect-square rounded-full flex items-center justify-center text-xl focus:outline-0 data-[pressed=true]:scale-1 ${className}`} {...props}>
      {children}
    </NextButton>
  );
}