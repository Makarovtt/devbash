import { Input } from "@nextui-org/react";
import { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const InputForm: FC<IProps> = ({ placeholder, ...inputProps }) => {
  return (
    <Input
      classNames={{
        inputWrapper:
          "!bg-bgInput data-[hover=true]:!bg-bgInputHover group-data-[focus=true]:!bg-bgInputHover",
        input: ["!text-black font-semibold", "placeholder:text-gray-500"],
      }}
      placeholder={placeholder}
      {...inputProps}
    />
  );
};
