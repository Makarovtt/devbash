import { FC } from "react";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

interface IProps {
  classname?: string;
  payOrder: string | number;
  setPayOrder: (arg0: string | number) => void;
}

export const PayOrder: FC<IProps> = ({ payOrder, setPayOrder, classname }) => {
  return (
    <Tabs
      aria-label="Options"
      className={classname}
      classNames={{
        tabList: "bg-bgForm",
        tab: "data-[focus-visible=true]:bg-gray-500",
        tabContent: "text-white group-data-[selected=true]:text-white",
      }}
      key="payMethod"
      selectedKey={payOrder}
      onSelectionChange={setPayOrder}
    >
      <Tab key="cash" title="Наличными">
        <Card className="bg-bgForm">
          <CardBody className="bg-bgForm">
            <h3>Оплата наличными при получении</h3>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="online" title="Онлайн" isDisabled>
        <Card className="bg-bgForm">
          <CardBody className="bg-bgForm">
            <h3>Оплата банковской картой</h3>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
};
