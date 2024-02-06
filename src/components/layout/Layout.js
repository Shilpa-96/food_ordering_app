import React from "react";
import Routers from "../../routes/Routers";
import Carts from "../../pages/carts/Carts";
import { useSelector } from "react-redux";
import Menu from "../../pages/menu/Menu";

function Layout() {
  const showMenu = useSelector((state) => state.menuUi.menuIsVisible);

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      {showMenu && !showCart && <Menu />}
      {showCart && !showMenu && <Carts />}
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default Layout;
