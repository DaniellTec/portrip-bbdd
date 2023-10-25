import React, { useEffect, useState } from "react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { display } from "@mui/system";

const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    {/*const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/login");
    };

    const ctbClickHandler = () => {
        menuToggleHandler();
        history.push("/sign");
    };
    */}

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo} style={{ color: '#283161'}}>
                 World Of Art
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    
                    <ul>
                        {/*<li>
                            <Link to="/artists" onClick={menuToggleHandler}>
                                Artistas
                            </Link>
                        </li>
                        */}
                        <li>
                            <Link to="/AdUser" onClick={menuToggleHandler} style={{ color: '#3d4578' }}>
                                <b>Pinturas</b>
                            </Link>
                        </li>
                        <li>
                            <Link to="/photo" onClick={menuToggleHandler} style={{ color: '#3d4578' }}>
                                <b>Fotografías</b>
                            </Link>
                        </li>
                        <li>
                            <Link to="/museum" onClick={menuToggleHandler} style={{ color: '#3d4578' }}>
                                <b>Museos</b>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" onClick={menuToggleHandler}>
                           <FaUserAlt/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shoppingCart" onClick={menuToggleHandler} style={{ color: '#6272bd' }} className="square border border-primary">
                            <b>Book Now</b>{/*<FaShoppingCart/>*/}
                            </Link>
                        </li>              
                    </ul>
                    {/*<button onClick={ctaClickHandler}>Login</button> 
                    &nbsp;
                    <button className="buttonA" onClick={ctbClickHandler}>Sign in</button>
                */}
                </nav>
                <div  style={{color: "#6272bd"}} className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiDotsVerticalRounded onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
        
    );
};

export default Header;
