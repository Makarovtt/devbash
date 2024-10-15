import { Textarea } from "@nextui-org/react";
import { FC } from "react";

interface IProps {
  comment: string;
  setComment: (arg0: string) => void;
}

export const Comment: FC<IProps> = ({ comment, setComment }) => {
  return (
    <Textarea
      aria-label="Description"
      placeholder="Введите дополнения к заказу"
      classNames={{
        inputWrapper: "bg-bgInput",
      }}
      className="max-w-full"
      value={comment}
      onValueChange={setComment}
    />
  );
};
