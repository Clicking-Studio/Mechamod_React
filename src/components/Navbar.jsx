import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [loc, setLoc] = useState(null);
    const [isCartVisible, setIsCartVisible] = useState(false); // Track cart visibility

    useEffect(() => {
        setLoc(location.pathname);
    }, [location.pathname]);

    // Function to toggle cart visibility
	const toggleCart = () => {
		const cartContent = document.querySelector('.cart-content');
		if (cartContent) {
			const currentDisplay = window.getComputedStyle(cartContent).getPropertyValue('display');
			cartContent.style.display = currentDisplay === 'none' ? 'block' : 'none';
		}
	};
	

    return (
        <ul className="navbar_container">
            <li className="navbar_logo">
                <Link to="/">
                    <img src="/images/navbar_logo.png" alt="logo" />
                </Link>
            </li>
            <li className="navbar_text">
                <Link to="/catalogue">Catalogue</Link>
            </li>
            <li className="navbar_line_spacer">
                <a href="#">—</a>
            </li>
            <li className="navbar_text">
                <a href="#">Community</a>
            </li>
            <li className="navbar_line_spacer">
                <a href="#">—</a>
            </li>
            <li className="navbar_text">
                <a href="#">About</a>
            </li>
            <li className="navbar_side_text">
                <a href="#" onClick={toggleCart}>Cart</a>
            </li>

            <li className="button_li">
                <a className="button not_index_menu_button">
                    <label htmlFor="circleMenu">
                        <div className="btn button-color-outer">
                            <span>
                                <div className="button-lines line-1"></div>
                                <div className="button-lines line-2"></div>
                                <div className="button-lines line-3"></div>
                            </span>
                        </div>
                    </label>
                </a>
            </li>
        </ul>
    );
};

export default Navbar;
