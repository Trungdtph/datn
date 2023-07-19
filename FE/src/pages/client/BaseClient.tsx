import { Outlet } from "react-router-dom";

import { LoginModal, NavBar } from "../../components";
import { useTheme } from "../../hooks";

const BaseClient = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <>
      <div
        className="
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar
          imageUser=""
          isLogin={false}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <LoginModal />

        <Outlet />
      </div>
    </>
  );
};

export default BaseClient;
