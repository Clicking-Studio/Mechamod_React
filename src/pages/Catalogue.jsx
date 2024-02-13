import "../styles/styles.css";
import "../styles/navbar.css";
import "../styles/hamburger.css";
import "../styles/menu.css";
import "../styles/product.css";
import "../styles/index.css";

import { useEffect } from "react";
import { fetchKeycaps } from "../productScripts/displayKeycapInfo";
import Navbar from "../components/Navbar";
import BottomMenu from "../components/BottomMenu";
import { darkLightModes } from "../script/dark_light_modes";
import { Link } from "react-router-dom";

const Catalogue = () => {
	useEffect(() => {
		const btns = document.querySelectorAll(".btn");

		btns.forEach((btn) => {
			btn.addEventListener("mousemove", function (e) {
				const position = btn.getBoundingClientRect();
				const x = e.pageX - position.left - position.width / 2;
				const y = e.pageY - position.top - position.height / 2;

				btn.children[0].style.transform =
					"translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
			});
		});

		btns.forEach((btn) => {
			btn.addEventListener("mouseout", function () {
				btn.children[0].style.transform = "translate(0px, 0px)";
			});
		});

		darkLightModes(); //dark-light modes functionallity
		fetchKeycaps();  //fetch key caps functionallity
	}, []);

	return (
		// <!-- Closing div is at the end of the page -->
		<div className="cursor">
			<Navbar />

			<input type="checkbox" id="circleMenu" />

			<div className="container">
				<a className="button container-button">
					<label htmlFor="circleMenu">
						<div className="btn button-color-inner">
							<span>
								<div className="button-lines-inner line-4"></div>
								<div className="button-lines-inner line-5"></div>
							</span>
						</div>
					</label>
				</a>

				<a className="container_logo" href="index.html">
					<img src="/images/navbar_logo.png" alt="logo" />
				</a>

				<ul className="menu_list">
					<li className="menu_item">
						<Link to="/" title="" className="menu_link">
							Shop
						</Link>
					</li>
					<li className="menu_item">
						<a href="#" title="" className="menu_link">
							Community
						</a>
					</li>
					<li className="menu_item">
						<Link to="/catalogue" title="" className="menu_link">
							Catalogue
						</Link>
					</li>
					<li className="menu_item">
						<a href="#" title="" className="menu_link">
							Our&nbsp;Story
						</a>
					</li>
				</ul>

				<BottomMenu />
			</div>
		</div>
	);
};

export default Catalogue;
