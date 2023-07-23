import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Form from "../Form/Form";

import { useUserMenu } from "../../../../hooks";
import { MenuOutlined } from "@ant-design/icons";

const InformationPage = () => {
  const userMenu = useUserMenu();
  return (
    <>
      {userMenu.isOpen && (
        <div
          className="
            absolute
            w-[200px]
            right-0
            top-10
            transition
            border
            rounded-xl
            dark:rounded-xl
            shadow-xl
            dark:shadow-xl
            border-divideLight
            dark:border-divideDark
            bg-light
            dark:bg-dark
            shadow-backgroundLight
            dark:shadow-backgroundDark"
        >
          <Menu />
        </div>
      )}

      <div
        className="  text-textPrimary
      dark:text-textDark dark:bg-[#000] bg-[#EFEFEF] max-w-full"
      >
        <div className="flex max-w-full">
          <Menu />

          <section className="ml-[30px]">
            <section className="nam:flex">
              <h1 className=" text-[25px] font-bold my-[17px] ">
                Thông tin cá nhân
              </h1>
              {/* <div className="item-center hidden nam:block" onClick={}>
                <MenuOutlined />
              </div> */}
            </section>

            <img
              alt="Avatar"
              src={"/images/profile/Banner.png" || "/Danh sách khánh sạn "}
              className="max-w-full"
            />

            <Form />
          </section>
        </div>
      </div>
    </>
  );
};
export default InformationPage;
