import React, { useRef, useState, useEffect } from "react";
import TxtLogo from "../../assets/img/Dulce1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  NavImgContainer,
  MobileNavbarBtn,
  Cart,
  CartItemsContainer,
  CartBtn,
  CartTitle,
  CartBtnContainer,
  NavCartBtn,
  CartDetailsContainer,
  CartDetails,
  CartActionsBtns,
} from "./styles";
import { CartCard } from "../../components/cart_card/cart_card";
import { formatPrice } from "../../utils/formatPrice";
import Swal from "sweetalert2";
import { useManagement } from "@/context/ManagementContext";
import toast from "react-hot-toast";

export const Navbar = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useManagement();
  const [menuState, setMenuState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const refMenuBtn = useRef(),
    refMenu = useRef();
  const refCartBtn = useRef(),
    refCart = useRef();

  const handleToggleMenu = () => {
    if (menuState === 0) {
      setMenuState((prev) => prev + 1);
      refMenu.current.style.transform = "translate(0)";
    } else {
      setMenuState(0);
      refMenu.current.style.transform = "translate(105%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== 0 && menuState === 1) {
        setMenuState(0);
        refMenu.current.style.transform = "translate(105%)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuState]);

  /* ========================================================= */
  const handleToggleCart = () => {
    if (cartState === 0) {
      setCartState((prev) => prev + 1);
      refCart.current.style.transform = "translate(0)";
    } else {
      setCartState(0);
      refCart.current.style.transform = "translate(105%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== 0 && cartState === 1) {
        setCartState(0);
        refCart.current.style.transform = "translate(105%)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cartState]);

  /* ========================================================= */

  const vaciarCarrito = () => {
    Swal.fire({
      title: "Desea vaciar el carrito?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffa500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar carrito!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Se han eliminado los items del carrito");
        clearCart();
        handleToggleCart();
      }
    });
  };

  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const deliveryCost = 2500;

  return (
    <HeaderSection>
      <NavContainer>
        <NavImgContainer>
          <NavLink to="/">
            <img src={TxtLogo} alt="Logo Dulce Maicenita" />
          </NavLink>
        </NavImgContainer>

        <MobileNavbarBtn>
          <FontAwesomeIcon
            onClick={handleToggleMenu}
            ref={refMenuBtn}
            icon={faBars}
            style={{ color: "#ffffff" }}
          />
        </MobileNavbarBtn>

        <NavBtnContainer ref={refMenu}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/products"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Productos
          </NavLink>
          <NavLink
            to="/about"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Contacto
          </NavLink>
        </NavBtnContainer>
        <CartBtnContainer onClick={handleToggleCart} ref={refCartBtn}>
          <NavCartBtn>
            <FontAwesomeIcon
              className="text-white text-xl"
              icon={faCartShopping}
            />
            <span>{getCartQuantity()}</span>
          </NavCartBtn>
        </CartBtnContainer>

        <Cart ref={refCart}>
          <CartTitle>
            <h2 className="text-xl text-white font-bold underline">
              Estas llevando:
            </h2>
          </CartTitle>
          <CartItemsContainer>
            {cart.length === 0 ? (
              <span className="text-white text-2xl">
                El carrito esta vacio!
              </span>
            ) : (
              cart.map((item) => (
                <CartCard
                  key={item.id}
                  /* name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl} */
                  {...item}
                  handleToggleCart={handleToggleCart}
                />
              ))
            )}
          </CartItemsContainer>

          <CartDetailsContainer>
            <div className="bg-white border-[1.5px] rounded-md"></div>
            <p>Detalles:</p>
            <CartDetails>
              <p>Subtotal</p>
              <span>{formatPrice(getCartTotal())}</span>
            </CartDetails>
            <CartDetails>
              <p>Envio</p>
              <span>
                {cart.length >= 1 ? formatPrice(deliveryCost) : formatPrice(0)}
              </span>
            </CartDetails>
            <div className="bg-white border-[1.5px] rounded-md"></div>
            <CartDetails>
              <p>Total</p>
              <span>
                {cart.length >= 1
                  ? formatPrice(getCartTotal() + deliveryCost)
                  : formatPrice(0)}
              </span>
            </CartDetails>
          </CartDetailsContainer>
          <CartBtn>
            <CartActionsBtns
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </CartActionsBtns>
            <CartActionsBtns
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                handleToggleCart();
                navigate("/checkout");
              }}
              disabled={cart.length === 0}
            >
              Finalizar pedido
            </CartActionsBtns>
          </CartBtn>
        </Cart>
      </NavContainer>
    </HeaderSection>
  );
};
