import { Outlet } from "react-router-dom";

const BaseAdmin = () => {
  return (
    <>
      <div
        className="
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <Outlet />
      </div>
    </>
  );
};

export default BaseAdmin;
