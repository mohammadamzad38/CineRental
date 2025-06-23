import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Shoppingcart from "../assets/shopping-cart.svg";
import CartDetails from "./Utils/CartDetails";
import { MovieContext } from "./Utils/MovieContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const { cartData } = useContext(MovieContext);

  function handleShoppingCart() {
    setShowCart(true);
  }
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-green-100 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-green-100 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-green-100 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block "
              href="#"
              onClick={handleShoppingCart}
            >
              <img
                src={Shoppingcart}
                width="24"
                height="24"
                alt="Shoppingcart"
              />
              {cartData.length > 0 && (
                <span className="font-bold text-xs  primary ml-[2px] p-1 absolute top-[12px] left-[28px]  rounded-full text-white">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
