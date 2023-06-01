import React, {useEffect, useState} from 'react';
import PizzaCards from "./tsx/pizzas_page/PizzaCards";
import {fetchPizzas} from "./fetching";
import Pizza from "./types/Pizza";
import {BounceLoader} from "react-spinners";
import Cart from "./tsx/cart_page/Cart";
import Order from "./tsx/order_page/Orders";
import Orders from "./tsx/order_page/Orders";
import Pizzas from "./tsx/pizzas_page/Pizzas";

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav className="uk-navbar-container" uk-navbar>
                        <div className="uk-flex uk-flex-center">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><Link to={"/"}>Пиццы</Link></li>
                                <li><Link to={"/orders"}>Заказы</Link></li>
                                <li><Link to={"/cart"}>Корзина</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route index path="/" element={<Pizzas />}/>
                    <Route path="/pizzas" element={<Pizzas />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
