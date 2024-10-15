"use client";

import { ContainerMain } from "@/ui/ContainerMain";
import { FC, useState } from "react";
import { Phone } from "./forms/Phone";
import { IUserData } from "./order.interface";
import { MethodDelivery } from "./forms/MethodDelivery";
import { TimeDelivery } from "./forms/TimeDelivery";
import { PayOrder } from "./forms/PayOrder";
import { GoldButton } from "@/ui/GoldButton";
import { BlockItemForm } from "@/ui/BlockItemForm";
import { Comment } from "./forms/Comment";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import { clearToDeliveryOrder } from "@/store/features/delivery.slice";
import { CircularProgress } from "@nextui-org/react";

const URLSendMail = "https://server.devbash.ru/mailto/test_pay.php";

export const OrderPageComponent: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [checkResultOrder, setCheckResultOrder] = useState<boolean>(false);
  // const [orderCheck, setOrderCheck] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>({
    phone: "",
    address: {
      street: "",
      home: "",
      privateHome: false,
      entrance: "",
      floor: "",
      flat: "",
    },
  });
  const [timeDelivery, setTimeDelivery] = useState({
    day: "",
    time: "",
  });
  const [comment, setComment] = useState<string>("");
  const [deliveryMethod, setDeliveryMethod] = useState<string | number>("self");
  const [deliveryTime, setDeliveryTime] = useState<string | number>("now");
  const [payOrder, setPayOrder] = useState<string | number>("cash");

  const dispatch = useAppDispatch();
  const orderInfo = useAppSelector((state) => state.deliveryReducer);

  const handlerForm = async () => {
    setIsLoading(true);
    const formSend = new FormData();

    formSend.append("phone", String(userData.phone));
    formSend.append("deliveryType", String(deliveryMethod));
    switch (deliveryMethod) {
      case "self":
        break;

      case "delivery":
        formSend.append("street", userData?.address.street);
        formSend.append("build", userData?.address.home);
        formSend.append("privateHome", String(userData?.address.privateHome));
        formSend.append("entrance", userData?.address.entrance);
        formSend.append("floor", userData?.address.floor);
        formSend.append("flat", userData?.address.flat);
        break;

      default:
        console.log("Error SwitchCase delivery");
    }

    formSend.append("deliveryTime", String(deliveryTime));
    switch (deliveryTime) {
      case "now":
        formSend.append("time", "now");
        break;

      case "later":
        formSend.append("order_day", timeDelivery.day);
        formSend.append("order_time", timeDelivery.time);
        break;

      default:
        console.log("Error SwitchCase selectedTime");
    }
    formSend.append("payType", String(payOrder));
    formSend.append("comment", comment);

    formSend.append("order", JSON.stringify(orderInfo));
    // for (const pair of formSend.entries()) {
    //   console.log(pair[0] + " - " + pair[1]);
    // }
    await axios.post(URLSendMail, formSend).then((res) => {
      if (res.data.code === "1") {
        setErrorText("");
        setCheckResultOrder(true);
        dispatch(clearToDeliveryOrder());
        if (payOrder === "cash") {
          // onOpen();
        } else if (payOrder === "online") {
          // router.push(res.data.url);
        }
        // setOrderCheck(true);
      } else {
        // console.log(JSON.parse(res.data));
        setErrorText(res.data);
        setIsLoading(false);
        // onOpen();
      }
      setIsLoading(false);
    });
  };
  return (
    <main
      className="bg-[url(/images/back.jpg)] bg-center bg-repeat-y min-h-[50vh] w-full
                    mt-10 py-5"
    >
      <ContainerMain>
        <h1>Оформление заказа</h1>
        <section
          className="my-10 w-full max-w-[600px] mx-auto bg-black p-1 rounded-2xl
                            flex flex-col items-start gap-5
                      400:p-5 600:p-10"
        >
          {checkResultOrder ? (
            <div className="w-full text-center">Заказ оформлен. Спасибо!</div>
          ) : (
            <>
              <BlockItemForm>
                <Phone
                  phone={userData.phone}
                  changePhone={(str) =>
                    setUserData({ ...userData, phone: str })
                  }
                />
              </BlockItemForm>
              <BlockItemForm>
                <MethodDelivery
                  address={userData.address}
                  changeAddress={(data) =>
                    setUserData({ ...userData, address: data })
                  }
                  deliveryMethod={deliveryMethod}
                  setDeliveryMethod={setDeliveryMethod}
                />
              </BlockItemForm>
              <BlockItemForm>
                <TimeDelivery
                  timeDelivery={timeDelivery}
                  setTimeDelivery={setTimeDelivery}
                  deliveryTime={deliveryTime}
                  setDeliveryTime={setDeliveryTime}
                />
              </BlockItemForm>
              <BlockItemForm>
                <Comment comment={comment} setComment={setComment} />
              </BlockItemForm>
              <BlockItemForm>
                <PayOrder payOrder={payOrder} setPayOrder={setPayOrder} />
              </BlockItemForm>
              {errorText && (
                <BlockItemForm className="border-red-600 text-[#bbb]">
                  <span className="text-red-600">* </span>
                  {errorText}
                </BlockItemForm>
              )}
              <div className="w-full flex justify-center">
                <GoldButton btnSize="btnCard" onClick={handlerForm}>
                  {isLoading ? (
                    <>
                      <CircularProgress
                        classNames={{
                          svg: "w-10 h-10 drop-shadow-md",
                          indicator: "stroke-white",
                          track: "stroke-white/10",
                          value: "font-semibold text-white",
                        }}
                        color="warning"
                        aria-label="Loading..."
                      />
                    </>
                  ) : (
                    <>Заказать</>
                  )}
                </GoldButton>
              </div>
            </>
          )}
        </section>
      </ContainerMain>
    </main>
  );
};
