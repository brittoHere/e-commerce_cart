import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__center">
        <div className="header__container-content">
          <div className="row flex align-items-center justify-content-between">
            <div className="col-md-4 col">
              <div className="topbar-right">
                <div className="drawer__container element">
                  <div className="drawer__pushmenu">
                    <img
                      src="https://balaclavafashion.com/img/icon_menu.svg"
                      width={26}
                      height={16}
                      alt="drawer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col flex justify-content-center">
              <div>
                <img
                  className="img__responsive"
                  src="https://balaclavafashion.com/img/logo.png"
                  alt="brand__name"
                />
              </div>
            </div>
            <div className="col-md-4 col flex justify-content-end">
              <div className="topbar-left flex">
                <div className="search__icon__container element">
                  <img
                    src="https://balaclavafashion.com/img/icon_search.svg"
                    width={20}
                    height={20}
                    alt="search"
                  />
                </div>
                <div className="user__icon__container element">
                  <img
                    src="https://balaclavafashion.com/img/icon_user.svg"
                    width={19}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="cart__icon__container element">
                  <img
                    src="https://balaclavafashion.com/img/icon_cart.svg"
                    width={20}
                    height={20}
                    alt="cart"
                  />
                  <span className="count__container">
                    <span className="count__text">0</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
