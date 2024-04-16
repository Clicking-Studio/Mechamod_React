import "../styles/styles.css";
import "../styles/navbar.css";
import "../styles/hamburger.css";
import "../styles/menu.css";
import "../styles/product.css";
import "../styles/index.css";

import { darkLightModes } from "../script/dark_light_modes";
import { product } from "../script/product";
import { addToCart } from "../productScripts/cartSystem";
import { fetchKeycaps } from "../productScripts/displayKeycapInfo";
import { color } from "../script/color";
import { useEffect } from "react";
import { default as snakeBg1 } from "/images/snake_background1.png";
import { default as mouseScroll } from "../assets/mouse-scroll-icon.png";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Cart from "./Cart";

const Home = () => {
	useEffect(() => {
		darkLightModes(); //dark-light modes functionallity
		color(); //color functionality
		product(); //product functionallity
		fetchKeycaps();  //fetch key caps functionallity
	});
	return (
		// <!-- Closing div is at the end of the page -->
		<div className="cursor">
			<div className="shadow-wrapper">
				<div className="shadow" id="shadow1"></div>
				<div className="shadow" id="shadow2"></div>

				<div className="snake-background-container">
					<div className="snake-background-item">
						<div className="snake-background-wrapper">
							<img src={snakeBg1} alt="" />
							<div className="snake-background-overlay"></div>
						</div>
					</div>
				</div>
			</div>
			<canvas className="webgl" id="webgl"></canvas>
			<div id="loading-message" className="loading-message">
				Loading keycaps...
			</div>

			<div className="wrapper">
				<div id="hover-zone">
					<div className="circle-text-holder1">
						<div className="circle-text1 snake-circle">
							{/* <!-- <p>The King Cobra . The King Cobra . The King Cobra . The King Cobra</p> --> */}
						</div>
						<div className="circle-text2 shenron-circle">
							{/* <!-- <p>The Shenron . The Shenron . The Shenron . The Shenron . The Shenron</p> --> */}
						</div>
						<div className="circle-text3 model3-circle">
							{/* <!-- <p>Model 3 . Model 3 . Model 3 . Model 3 . Model 3 . Model 3 . Model 3</p> --> */}
						</div>
						<div className="circle-text4 model4-circle">
							{/* <!-- <p>Model 4 . Model 4 . Model 4 . Model 4 . Model 4 . Model 4 . Model 4</p> --> */}
						</div>
					</div>
					{/* <!-- the snake's button --> */}
					<button id="snake"></button>
					{/* <!-- the shenon's button --> */}
					<button id="shenon"></button>
					{/* <!-- the model3's button --> */}
					<button id="model3"></button>
					{/* <!-- the model4's button --> */}
					<button id="model4"></button>
				</div>
				<button
					className="left-arrow-btns-hidden"
					id="left-arrow-btn"
				></button>
				<button
					className="right-arrow-btns-hidden"
					id="right-arrow-btn"
				></button>
			</div>

			<Navbar />



			{/* <!-- SNAKE PRODUCT INFO --> */}
			<div id="product-container0">
				<div className="product-left-text-container">
					<div className="product-centering-div">
						<div className="product-left-text-title"></div>
						<div className="product-left-text-header"></div>
						<ul className="product-left-text-bottom">
							<li>Casted with Smooth-On</li>
							<li>Compatible with Cherry MX and clones</li>
							{/* <li className="li-continuation">and clones</li> */}
							<li>Hand Crafted</li>
							<li>Price inclusive of taxes, without shipping</li>
							{/* <li className="li-continuation">worldwide, one of a kind ;)</li> */}
						</ul>
					</div>
				</div>

				<div className="product-right-container">
					<div className="product-centering-div">
						<div className="color-options">
							<div className="color-option" id="color-black">
								BLACK
							</div>
							<div className="color-option" id="color-desert">
								DESERT
							</div>
							<div className="color-option" id="color-gold">
								GOLD
							</div>
						</div>

						<div className="price"></div>

						{/* <button onClick={() => addToCart(1)} className="add-to-bag">
							ADD TO BAG
						</button> */}

						<div class="add-to-bag-container">
							<div class="add-to-bag-button-container">
								<span class="add-to-bag-mask">ADD TO BAG</span>
								<button onClick={() => addToCart(1)} className="add-to-bag">ADD TO BAG</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- SHENRON PRODUCT INFO --> */}
			<div id="product-container1">

				<div className="product-left-text-container">
					<div className="product-centering-div">
						<div className="product-left-text-title"></div>
						<div className="product-left-text-header"></div>
						<ul className="product-left-text-bottom">
							<li>Description 1</li>
							<li>Description 2</li>
							<li className="li-continuation">test</li>
							<li>Description 3</li>
							<li>Description 4</li>
							<li className="li-continuation">test</li>
						</ul>
					</div>
				</div>

				<div className="product-right-container">
					<div className="product-centering-div">
						<div className="color-options">
							<div className="color-option" id="color-black">
								BLACK
							</div>
							<div className="color-option" id="color-desert">
								DESERT
							</div>
							<div className="color-option" id="color-gold">
								GOLD
							</div>
						</div>

						<div className="price"></div>

						{/* <button onClick={() => addToCart(2)} className="add-to-bag">
							ADD TO BAG
						</button> */}

						<div class="add-to-bag-container">
							<div class="add-to-bag-button-container">
								<span class="add-to-bag-mask">ADD TO BAG</span>
								<button onClick={() => addToCart(2)} className="add-to-bag">ADD TO BAG</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--PRODUCT #3 INFO --> */}
			<div id="product-container2">
				<div className="product-left-text-container">
					<div className="product-centering-div">
						<div className="product-left-text-title"></div>
						<div className="product-left-text-header"></div>
						<ul className="product-left-text-bottom">
							<li>Description for it</li>
							<li>Description for it too</li>
							<li className="li-continuation">test</li>
							<li>More of the description</li>
							<li>Last description</li>
							<li className="li-continuation">test</li>
						</ul>
					</div>
				</div>

				<div className="product-right-container">
					<div className="product-centering-div">
						<div className="color-options">
							<div className="color-option" id="color-black">
								BLACK
							</div>
							<div className="color-option" id="color-desert">
								DESERT
							</div>
							<div className="color-option" id="color-gold">
								GOLD
							</div>
						</div>

						<div className="price"></div>

						{/* <button onClick={() => addToCart(3)} className="add-to-bag">
							ADD TO BAG
						</button> */}
						<div class="add-to-bag-container">
							<div class="add-to-bag-button-container">
								<span class="add-to-bag-mask">ADD TO BAG</span>
								<button onClick={() => addToCart(3)} className="add-to-bag">ADD TO BAG</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- PRODUCT #4 INFO --> */}
			<div id="product-container3">
				<div className="product-left-text-container">
					<div className="product-centering-div">
						<div className="product-left-text-title"></div>
						<div className="product-left-text-header"></div>
						<ul className="product-left-text-bottom">
							<li>Description for it</li>
							<li>Description for it too</li>
							<li className="li-continuation">test</li>
							<li>More of the description</li>
							<li>Last description</li>
							<li className="li-continuation">another test</li>
						</ul>
					</div>
				</div>

				<div className="product-right-container">
					<div className="product-centering-div">
						<div className="color-options">
							<div className="color-option" id="color-black">
								BLACK
							</div>
							<div className="color-option" id="color-desert">
								DESERT
							</div>
							<div className="color-option" id="color-gold">
								GOLD
							</div>
						</div>

						<div className="price"></div>

						{/* <button onClick={() => addToCart(4)} className="add-to-bag">
							ADD TO BAG
						</button> */}
						<div class="add-to-bag-container">
							<div class="add-to-bag-button-container">
								<span class="add-to-bag-mask">ADD TO BAG</span>
								<button onClick={() => addToCart(4)} className="add-to-bag">ADD TO BAG</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="index-container">
				{/* <!-- <button className="index-button" id="snake">Buy Now</button>
        <button className="index-button" id="shenon">Buy Now</button>
        <button className="index-button" id="model3">Buy Now</button>
        <button className="index-button" id="model4">Buy Now</button> --> */}

				<button className="index-button" id="previousBTN">
					<div className="index-arrow">&#8593;</div>
					<div>Previous</div>
				</button>
				<button className="index-button" id="nextBTN">
					<div className="index-arrow">
						<img src={mouseScroll} alt="" />
					</div>
					<div>Scroll for next product</div>
				</button>
			</div>

			<div className="botcontainer">
				{/* <!-- <img src="mouse-scroll-icon.png" alt="Scroll Icon" className="scroll-wheel" id="scroll-icon"> --> */}
			</div>

			<Menu />
			<Cart />
		</div>
	);
};

export default Home;
